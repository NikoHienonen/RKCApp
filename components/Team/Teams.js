import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';

import Team from './Team';

export default class componentName extends Component {
  state = {
    teams: {
      team1 : {
        name: 'Valepa',
        points: 0,
        rounds: 0,
        timeOuts: 2,
        serve: false,
      },
      team2 : {
        name: 'Hurrikaani',
        points: 0,
        rounds: 0,
        timeOuts: 2,
        serve: false,
      },
    },
    roundLimit: 3,
    rounds: []
  }
  CollectDataAfterGameOver = (stats) => {
    this.props.GameOver(stats);
  }
  endRound = () => {
    
  }
  render() {
    return (
    <View style={styles.container}>
      <Team state={this.state.teams.team1} roundWon={this.endRound}/>
      <Team state={this.state.teams.team2} roundWon={this.endRound}/>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})
