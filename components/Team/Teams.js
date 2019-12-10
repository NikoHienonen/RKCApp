import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';

import Team from './Team';

export default class componentName extends Component {
  state = {
    team1: 'Valepa',
    team2: 'Hurrikaani',
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
  }/*
  CollectDataAfterGameOver = (stats) => {
    this.props.GameOver(stats);
  }
  RoundOver = (team1Points, team2Points) => {
    let pointsA = [...this.state.pointsA].push(team1Points);
    let pointsB = [...this.state.pointsB].push(team2Points);
    this.setState({pointsA, pointsB}, () => {console.log(this.state)});
  }*/
  render() {
    return (
    <View style={styles.container}>
      <Team name={this.state.team1} points={this.state.team1Points}
        AddPoint={this.AddPoint} DeletePoint={this.DeletePoint}
      />
      <Team name={this.state.team2} points={this.state.team2Points}
        AddPoint={this.AddPoint} DeletePoint={this.DeletePoint}
      />
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})
