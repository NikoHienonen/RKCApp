import React, { useState, useEffect, Fragment} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

import RefreshButton from '../Team/Buttons/RefreshButton';

export default function Tournaments({navigate}) {
  const [tournaments, setTournaments] = useState(null);
  useEffect(() => {
    if(!tournaments) {
      const url = 'https://damp-river-31127.herokuapp.com/api/tournaments';
      axios.get(url)
        .then(result => {
          setTournaments(result.data.tournaments);
        })
        .catch(err => console.log(err))
    }
  }, [tournaments]); 
  return (
    <Fragment>
      <RefreshButton func={() => setTournaments(null)}/>
      {
        !tournaments
        ? <Text style={styles.error}>Ei turnauksia!</Text>
        : <FlatList style={styles.list} data={tournaments} renderItem={({item}) => 
            <TouchableOpacity onPress={() => navigate(item._id)} style={styles.tournamentButton}>
              <Text style={styles.innerText}>{item.name}</Text>
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
  tournamentButton: {
    flex: 1,
    backgroundColor: "#F58100",
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 3,
    width: '100%',
    paddingVertical: '5%',
    marginTop: 5
  },
  innerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    height: '100%'
  },
})