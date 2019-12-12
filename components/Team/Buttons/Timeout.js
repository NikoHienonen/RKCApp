import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Timeout extends Component {
  state = {
    used: false
  } 
  getStyle = () => {
    return this.state.used 
    ? styles.notUsed
    : styles.used
  }
  Toggle = () => {
    this.setState(prevState => ({
      used: !prevState.used
    }));
  }
  render() {
    return (
      <TouchableOpacity style={[this.getStyle(), styles.circle]} onPress={() => this.Toggle()}>
        <Text style={styles.text}>T</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignContent: 'center'
  },
  notUsed: {
    backgroundColor: 'black'
  },
  used: {
    backgroundColor: 'orange'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 28
  }
})

