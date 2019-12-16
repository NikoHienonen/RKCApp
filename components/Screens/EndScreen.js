import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ScreenOrientation } from 'expo';

export default class GameScreen extends Component {
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
    const {
      team1,
      team2,
      roundsWon, 
      roundStatistics 
    } = this.props.navigation.getParam('gameStats');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Game results</Text>
        <Text style={styles.results}>{`${team1} ${roundsWon[0]} - ${roundsWon[1]} ${team2}`}</Text>
        <Text style={styles.results}>{this.createStatString(roundStatistics)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#413E3A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 50,
    color: 'orange'
  },
  results: {
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 10,
    color: 'orange'
  }
});
