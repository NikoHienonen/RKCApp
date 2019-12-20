import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import PreGameForm from '../PreGame/PreGameForm';

export default class PreGameScreen extends Component {
  static navigationOptions = ({navigation}) => {
    //let repo = navigation.getParam('gameStarts');
    return {
      title: 'Pre-Game',
      headerStyle: { backgroundColor: '#413E3A'},
      headerTintColor: 'orange' 
    };
  };
  state = {
    maxPoints: 3, 
    maxRounds: 4, 
    bestOfMaxRounds: false
  }
  onChangeText = (value, text) => {
    if(!isNaN(text)) {
      if(value === 'rounds'){
        this.setState({maxRounds: text});
      } else {
        this.setState({maxPoints: text});
      }
    }
  }
  toggleBestOf = () => {
    let bestOfMaxRounds = !this.state.bestOfMaxRounds;
    this.setState({bestOfMaxRounds});
  }
  readyForNavigation = () => {
    const {navigate} = this.props.navigation;
    const { maxPoints, maxRounds } = this.state;
    if(maxPoints > 0 && maxRounds > 0) {
      navigate('Game', this.state);
    }
  }
  render() {
    const { maxPoints, maxRounds, bestOfMaxRounds } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Select your game stats</Text>
        <PreGameForm rounds={maxRounds} points={maxPoints} bestOf={bestOfMaxRounds} 
        onChangeText={this.onChangeText} toggleBestOf={this.toggleBestOf} />
        <TouchableOpacity onPress={() => this.readyForNavigation()}
          style={styles.button}>
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
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
    fontSize: 30,
    color: 'orange',
    textAlign: 'center'
  },
  button: {
    marginTop: 0,
    padding: 10,
    backgroundColor: 'orange'
  },
  buttonText: {
    color: 'white',
    fontSize: 25
  }
});
