import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ScreenOrientation } from 'expo';

export default class GameScreen extends Component {
  static navigationOptions = ({navigation}) => {
    //let repo = navigation.getParam('gameStarts');
    return {
      title: 'End game'
    };
  };
  componentDidMount() {
    console.log(this.props.navigation.getParam('gameStats'));
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Game ended</Text>
        <Text>{this.props.navigation.getParam('gameStats')}</Text>
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
