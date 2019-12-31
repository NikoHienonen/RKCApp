import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import Tournaments from '../Tournaments/Tournaments';


export default class TournamentScreen extends Component {
  static navigationOptions = ({navigation}) => {
    //let repo = navigation.getParam('gameStarts');
    return {
      title: 'Tournaments',
      headerStyle: { backgroundColor: '#413E3A'},
      headerTintColor: 'orange' 
    };
  };
  navigate = _id => {
    const {navigate} = this.props.navigation;
    navigate('Login', {tournamentId: _id});
  }
  render(){
    return <View style={styles.container}>
      <Tournaments navigate={this.navigate}/>
    </View>
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
