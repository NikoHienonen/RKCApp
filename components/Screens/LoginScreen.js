import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Login from '../Login/Login';


export default class GameScreen extends Component {
  static navigationOptions = ({navigation}) => {
    //let repo = navigation.getParam('gameStarts');
    return {
      title: 'Login',
      headerStyle: { backgroundColor: '#413E3A'},
      headerTintColor: 'orange' 
    };
  };
 navigate = (prop) => {
   const { navigate } = this.props.navigation;
   navigate(prop);
 }
  render(){
    return <Login />
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
