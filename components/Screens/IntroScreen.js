import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenOrientation } from 'expo';

export default class GameScreen extends Component {
  static navigationOptions = ({navigation}) => {
    //let repo = navigation.getParam('gameStarts');
    return {
      title: 'RKC-Volleyball App',
      headerStyle: { backgroundColor: '#413E3A'},
      headerTintColor: 'orange' 
    };
  };

  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }
  navigate = (prop) => {
    const { navigate } = this.props.navigation;
    navigate(prop);
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={(() => this.navigate('PreGame'))}
        style={styles.navButton}>
          <View style={styles.textContainer}>
            
            <Text style={styles.innerText}>Click here if you just want to referee a match!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={(() => this.navigate('Tournaments'))}
        style={styles.navButton}>
          <View style={styles.textContainer}>
            
            <Text style={styles.innerText}>Click here if you are a referee in a tournament!</Text>
          </View>
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
  navButton: {
    flex: 1,
    backgroundColor: "#F58100",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 10,
    borderColor: 'white',
    borderWidth: 3
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: "50%",
    marginHorizontal: 10
  },
  innerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  title: {
    fontSize: 50,
    color: 'white'
  },
});
