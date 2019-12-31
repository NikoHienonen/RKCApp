import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { ScreenOrientation } from 'expo';

import Teams from '../Team/Teams';

export default class GameScreen extends Component {
  constructor(props) {
    super(props);
  }
  /*
  * GameScreen is where the refereeing of a match happens, notice that 
    the screen is locked to horizontal-view, this helps with the layout,
    since only one is required.
  */
  static navigationOptions = {
    title: 'RKC-Volley App',
    headerStyle: { backgroundColor: '#413E3A'},
    headerTitleStyle: { color: 'orange' }
  };

  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }
  GameOver = (gameStats) => {
    const { navigation } = this.props;
    const {navigate} = navigation;
    const tournamentId = navigation.getParam('tournamentId');
    const referee = navigation.getParam('referee');
    const match = navigation.getParam('match');
    const sendData = {
      data: {
        gameStats: gameStats, 
        referee: referee,
        tournamentId: tournamentId,
        match: match
      }
    }
    navigate('End', sendData);
  } 
  render() {
    const data = this.props.navigation.getParam('data');
    const {homeTeam, visitorTeam, maxRounds, maxPoints, timeOuts, 
      bestOfMaxRounds, winByTwo } = data;

    return (
      <View style={styles.container}>
        <Teams maxPoints={maxPoints} maxRounds={maxRounds} homeTeam={homeTeam}
        visitorTeam={visitorTeam} timeOuts={timeOuts} winByTwo={winByTwo}
        bestOfMaxRounds={bestOfMaxRounds} GameOver={this.GameOver}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#413E3A',
  },

});
