import React, { Component } from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  TextInput 
} from 'react-native';

export default class Team extends Component {
  state = {
    points: 0,
    rounds: 0,
    timeOuts: 2,
    serve: false,
  }
  render() {
    const { points } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.points}
          onPress={() => this.props.AddPoint(this.props.name)}>
          <Text style={styles.pointsText}>{points.toString()}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.minusPoint}
          onPress={() => this.props.DeletePoint(this.props.name)}>
          <Text style={styles.minusPointText}>-1</Text>
        </TouchableOpacity>
        <Text style={styles.name}>{this.props.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10 
  },
  points: {
    backgroundColor: 'orange',
    padding: 20,
    minWidth: 120,
    alignContent: 'center',
    marginVertical: 10
  },
  pointsText: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center'
  },
  minusPoint: {
    backgroundColor: 'orange',
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignContent: 'center'
  },
  minusPointText :{
    fontSize: 25,
    color: 'white',
    textAlign: 'center'
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10
  }
})