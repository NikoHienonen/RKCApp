import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native';

import Team from './Team';

export default class componentName extends Component {
  state = {
    team1: '',
    team2: '',
    team1Points: 0,
    team2Points: 0,
    roundLimit: 3,
    rounds: []
  }
  AddPoint = (team) => {
    if(team === this.state.team1) {
      let team1Points = this.state.team1Points + 1
      this.setState({team1Points});
    } else {
      let team2Points = this.state.team2Points + 1
      this.setState({team2Points});
    }
  }
  DeletePoint = (team) => {
    if(team === this.state.team1) {
      let points = this.state.team1Points
      if(points > 0) {
        let team1Points = points - 1
        this.setState({team1Points});
      }
    } else {
      let points = this.state.team2Points
      if(points > 0) {
        let team2Points = points - 1
        this.setState({team2Points});
      }
    }
  }
  onChangeText = (team, text) => {
    if(team === 'Team1'){
      this.setState({team1: text});
    } else {
      this.setState({team2: text});
    }
  }
  /*
  CollectDataAfterGameOver = (stats) => {
    this.props.GameOver(stats);
  }
  RoundOver = (team1Points, team2Points) => {
    let pointsA = [...this.state.pointsA].push(team1Points);
    let pointsB = [...this.state.pointsB].push(team2Points);
    this.setState({pointsA, pointsB}, () => {console.log(this.state)});
  }*/
  render() {
    const { team1, team2, team1Points, team2Points} = this.state;
    return (
    <View style={styles.container}>
      <TextInput value={team1} placeholder='Team1'
      onChangeText={text => this.onChangeText('Team1', text)}/>
      <Team name={team1} points={team1Points}
        AddPoint={this.AddPoint} DeletePoint={this.DeletePoint}
      />
      <TextInput value={team2} placeholder='Team2'
      onChangeText={text => this.onChangeText('Team2', text)}/>
      <Team name={team2} points={team2Points}
        AddPoint={this.AddPoint} DeletePoint={this.DeletePoint}
      />
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10
  }
})
