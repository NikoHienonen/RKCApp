import React, { Component } from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  TextInput,
  Switch
} from 'react-native';

import Timeout from './Buttons/Timeout';
import AddPoint from './Buttons/AddPoint';
import DeletePoint from './Buttons/DeletePoint';

export default class Team extends Component {
  switchTimeouts = () => {
    this.setState({timeOuts: 1});
  }
  render() {
    const { points } = this.props;
    return (
      <View style={styles.container}>
        <AddPoint points={points} name={this.props.name} 
        AddPoint={this.props.AddPoint}/>
        <DeletePoint name={this.props.name} 
        DeletePoint={this.props.DeletePoint}/>
        <Timeout />
        <Timeout />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10 
  }
});