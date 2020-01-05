import React, { Fragment, useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

import RefreshButton from '../Team/Buttons/RefreshButton';

export default function Matches({tournamentId, referee, navigate}) {
  const [matches, setMatches] = useState(null);
  useEffect(() => {
    if(!matches) {
      const url = `https://damp-river-31127.herokuapp.com/api/tournaments/${tournamentId}/matches/byReferee/${referee.username}`;

      axios.get(url, getHeader())
        .then(result => {
          const data = result.data.matches;
          const filteredData = data.filter(match => {
            return match.homeRoundsWon === 0 && match.visitorRoundsWon === 0;
          })
          setMatches(filteredData);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [matches]); 


  getHeader = () => {
    return {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${referee.token}`
      }
    }
  }

  confirmPress = match => {
    Alert.alert(
      'Varmista ottelun tuomarointi',
      `${match.homeTeam} - ${match.visitorTeam}`,
      [
        {
          text: 'Takaisin',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Varmista', onPress: () => navigate(match)},
      ],
      {cancelable: true},
    );
  }
  return (
    <Fragment>
      <RefreshButton func={() => setMatches(null)}/>
      {
        !matches || matches.length === 0
        ? <Text style={styles.error}>Ei otteluita vielä!</Text>
        : <FlatList style={styles.list} data={matches} renderItem={({item}) => 
            <TouchableOpacity onPress={() => confirmPress(item)} style={styles.matchButton}>
              <View style={styles.textContainer}>
                <Text style={styles.time}>{item.startingTime}</Text>
                <Text style={styles.innerText}>{item.homeTeam} - {item.visitorTeam}</Text>
              </View>
            </TouchableOpacity>
          }
            keyExtractor={item => item._id}
          />
      }
    </Fragment>
  );
}

const styles = StyleSheet.create({
  error: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
  list :{
    width: '100%'
  },
  matchButton: {
    flex: 1,
    backgroundColor: "#F58100",
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 3,
    width: '100%',
    paddingVertical: '5%',
    marginTop: 5
  },
  textContainer: {
    height: "100%"
  },
  time: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25
  },
  innerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
})