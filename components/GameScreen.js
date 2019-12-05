import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { ScreenOrientation } from 'expo';

import Teams from './Team/Teams';

export default class GameScreen extends Component {
  static navigationOptions = {
    title: 'RKC-Volley App',
  };
  GameOver = (gameStats) => {
    const {navigate} = this.props.navigation;
    navigate('End', {gameStats});
  } 
  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }
  render() {
    return (
      <View style={styles.container}>
        <Teams GameOver={this.GameOver}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
