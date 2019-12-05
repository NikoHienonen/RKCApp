import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { ScreenOrientation } from 'expo';

export default class GameScreen extends Component {
  static navigationOptions = {
    title: 'RKC-Volley App',
  };
  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Game here</Text>
        <Button
        title="Game Done"
        onPress={() => navigate('End', {gameStats: 'Valepa Hävis :)'})}
      />
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
