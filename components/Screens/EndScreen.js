import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ScreenOrientation } from 'expo';
import axios from 'axios';

export default class GameScreen extends Component {
  constructor(props) {
    super(props);
    console.log('päästiin endgamee asti')
  }
  static navigationOptions = ({navigation}) => {
    //let repo = navigation.getParam('gameStarts');
    return {
      title: 'End game',
      headerStyle: { backgroundColor: '#413E3A'},
      headerTintColor: 'orange' 
    };
  };
  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }
  matchDataCreator = gameStats => {
    const { roundsWon, roundStatistics } = gameStats;
    let homePointsWon = 0; 
    let visitorPointsWon = 0;
  
    for(i = 0; i < roundStatistics.length; i++) {
      i % 2 === 0 || i === 0
      ? homePointsWon += roundStatistics[i]
      : visitorPointsWon += roundStatistics[i];
    }
    const match = {
      match: {
        homeRoundsWon: roundsWon[0],
        visitorRoundsWon: roundsWon[1],
        homePointsWon: homePointsWon,
        visitorPointsWon: visitorPointsWon
      }
    };
    return match;
  }
  getHeader = referee => {
    return {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${referee.token}`
      }
    }
  }
  saveMatchData = data => {
    const { tournamentId, gameStats, referee, match } = data;
    const url = `https://damp-river-31127.herokuapp.com/api/tournaments/${tournamentId}/matches/played/${match._id}`;
    const body = this.matchDataCreator(gameStats);
    const header = this.getHeader(referee);
    console.log(url, body, header);
    axios.patch(url, body, header)
      .then(result => { 
        if(result.status === 201) {
          Alert.alert(
            'Ottelun tallennus onnistui!',
            '',
            [
              {text: 'Siirry takaisin otteluihin', onPress: () => {
                this.props.navigation.navigate('Matches', {
                  referee: referee,
                  tournamentId: tournamentId
                });
              }},
            ],
          );
        } else {
          Alert.alert(
            'Ongelma ottelun tallennuksessa!',
            'Ota yhteys välittömästi turnauksen järjestäjään',
            [
              {text: 'Siirry takaisin otteluihin', onPress: () => {
                this.props.navigation.navigate('Matches', {
                  referee: referee,
                  tournamentId: tournamentId
                });
              }},
            ],
          );
        }
      })
      .catch(err => console.log(err));
  }
  createStatString = (results) => {
    let resultString = '[';
    for(i = 0; i < results.length; i++){
      resultString = resultString+results[i];
      let separator = i % 2 == 0 ? ' - ' : ', ';
      if(i !== results.length-1){
        resultString = resultString+separator;
      } else {
        resultString = resultString+']'
      }
    }
    return resultString;
  }
  render() {
    const data = this.props.navigation.getParam('data');
    console.log(data.gameStats)
    const {
      team1,
      team2,
      roundsWon, 
      roundStatistics 
    } = data.gameStats
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Game results</Text>
        <Text style={styles.results}>{`${team1} ${roundsWon[0]} - ${roundsWon[1]} ${team2}`}</Text>
        <Text style={styles.results}>{this.createStatString(roundStatistics)}</Text>
        {
          !data.referee
          ? null
          : <TouchableOpacity onPress={() => this.saveMatchData(data)} style={styles.save}>
              <Text style={styles.saveText}>Tallenna tulos</Text>
            </TouchableOpacity>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#413E3A',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 45,
    color: 'orange'
  },
  results: {
    fontSize: 35,
    textAlign: 'center',
    color: 'orange'
  },
  save: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    width: "50%"
  },
  saveText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: "2%"
  }
});
