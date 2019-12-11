import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native';

import Team from './Team';
import Input from './Input';

export default class componentName extends Component {
  state = {
    team1: '',
    team2: '',
    team1Points: 0,
    team2Points: 0,
    roundLimit: 3,
    rounds: [0, 0],
    serveOnTeam1: true
  }
  AddPoint = (team) => {
    if(team === 'team1') {
      let team1Points = this.state.team1Points + 1
      if(!this.state.serveOnTeam1){
        this.setState({serveOnTeam1: true});
      }
      this.setState({team1Points});
    } else {
      let team2Points = this.state.team2Points + 1
      if(this.state.serveOnTeam1){
        this.setState({serveOnTeam1: false});
      }
      this.setState({team2Points});
    }
  }
  DeletePoint = (team) => {
    if(team === 'team1') {
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
    if(team === 'team1'){
      this.setState({team1: text});
    } else {
      this.setState({team2: text});
    }
  }
  toggleServe = () => {
    this.setState(prevState => ({
      serveOnTeam1: !prevState.serveOnTeam1
    }));
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
    const { team1, team2, team1Points, team2Points, serveOnTeam1, rounds} = this.state;
    return (
    <View style={styles.row}>
      <View style={[styles.mainContainer, styles.column]}>
        <View style={styles.row}>
          <Input value={team1} placeholder='Team1' name='team1'
          onChangeText={this.onChangeText}/>
          <Text style={styles.rounds}>{rounds[0]}</Text>
        </View>
        <Team name='team1' points={team1Points} rounds={rounds[0]}
          AddPoint={this.AddPoint} DeletePoint={this.DeletePoint}
          hasServe={serveOnTeam1} toggleServe={this.toggleServe}
        />
      </View>
      <View style={[styles.mainContainer, styles.column]}>
        <View style={styles.row}>
          <Text style={styles.rounds}>{rounds[1]}</Text>
          <Input value={team2} placeholder='Team2' name='team2'
          onChangeText={this.onChangeText}/>
        </View>
        <Team name='team2' points={team2Points}
          AddPoint={this.AddPoint} DeletePoint={this.DeletePoint}
          hasServe={serveOnTeam1} toggleServe={this.toggleServe}
        />
      </View>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 30,
  },
  row: {
    flexDirection: 'row',
    borderColor: 'aqua',
    borderWidth: 1
  },
  column: {
    flexDirection: 'column',
    borderColor: 'red',
    borderWidth: 1
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10
  },
  rounds: {
    color: 'white',
    fontSize: 35
  }
})
