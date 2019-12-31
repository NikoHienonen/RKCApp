import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenOrientation } from 'expo';

import Login from '../Login/Login';


export default class GameScreen extends Component {
  state = {
    tournamentId: ''
  }
  static navigationOptions = ({navigation}) => {
    //let repo = navigation.getParam('gameStarts');
    return {
      title: 'Login',
      headerStyle: { backgroundColor: '#413E3A'},
      headerTintColor: 'orange' 
    };
  };
  
  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    this.setState({tournamentId: this.props.navigation.getParam('tournamentId')});
  }
  navigate = (userData) => {
    this.props.navigation.navigate('Matches', {
      referee: userData,
      tournamentId: this.state.tournamentId
    });
  }
  render(){
    return <Login navigate={this.navigate} tournamentId={this.state.tournamentId}/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#413E3A',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
