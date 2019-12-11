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
import Serve from './Buttons/Serve';

export default class Team extends Component {
  switchTimeouts = () => {
    this.setState({timeOuts: 1});
  }
  renderServe = () => {
    if(this.props.name === 'team1') {
      return this.props.hasServe
      ? <Serve name={this.props.name} hasServe={this.props.hasServe}
      toggleServe={this.props.toggleServe}/>
      : <View style={styles.servePlaceholder}></View>;
    } else {
      return !this.props.hasServe
      ? <Serve name={this.props.name} hasServe={this.props.hasServe}
      toggleServe={this.props.toggleServe}/>
      : <View style={styles.servePlaceholder}></View>;
    } 
  }
  renderMirror = (points) => {
    return this.props.name === 'team1'
    ? (
      <View style={styles.row}>
        <AddPoint points={points} name={this.props.name} 
        AddPoint={this.props.AddPoint}/>
        <View style={styles.column}>
          {this.renderServe()}
          <Timeout />
          <Timeout />
        </View>
      </View>
    )
    :(
      <View style={styles.row}>
        <View style={styles.column}>
          {this.renderServe()}
          <Timeout />
          <Timeout />
        </View>
        <AddPoint points={points} name={this.props.name} 
        AddPoint={this.props.AddPoint}/>
      </View>
    )
  } 
  render() {
    const { points } = this.props;
    return (
      <View style={styles.container}>
        {this.renderMirror(points)}
        <DeletePoint name={this.props.name} 
        DeletePoint={this.props.DeletePoint}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10 
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  servePlaceholder: {
    height: 40,
    width: 40
  }
});