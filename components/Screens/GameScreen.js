import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { ScreenOrientation } from 'expo';

import Teams from '../Team/Teams';

export default class GameScreen extends Component {
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
    const {navigate} = this.props.navigation;
    navigate('End', {gameStats});
  } 
  render() {
    const { navigation } = this.props;
    let maxPoints = navigation.getParam('maxPoints');
    let maxRounds = navigation.getParam('maxRounds');
    let bestOfMaxRounds = navigation.getParam('bestOfMaxRounds');
    return (
      <View style={styles.container}>
        <Teams maxPoints={maxPoints} maxRounds={maxRounds} 
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
