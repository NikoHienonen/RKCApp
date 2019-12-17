import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class TournamentScreen extends Component {
  static navigationOptions = ({navigation}) => {
    //let repo = navigation.getParam('gameStarts');
    return {
      title: 'Tournaments',
      headerStyle: { backgroundColor: '#413E3A'},
      headerTintColor: 'orange' 
    };
  };
 navigate = (prop) => {
   const { navigate } = this.props.navigation;
   navigate(prop);
 }
  render(){
    return <View style={styles.container}>
      <Text>Tournaments</Text>
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
