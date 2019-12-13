import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';

import Team from './Team';
import Input from './Input';

export default class Teams extends Component {
  state = {
    team1: 'Team1',       // Name of team1
    team2: 'Team2',       // Name of team2
    team1Points: 0,       // Points of team1
    team2Points: 0,       // Points of team1
    roundsWon: [0, 0],    // A list of how many rounds each team has won.
    roundStatistics: [],  // A list of how many points each team got in a rounds
    serveOnTeam1: true    // Is team1 serving
  }
  componentDidMount() {
    let rounds = this.props.maxRounds;
    console.log(typeof rounds)
  }
  EndRound = (winner) => {
    let index = winner === 'team1' ? 0 : 1;
    let roundsTable = this.state.roundsWon;
    roundsTable[index] = roundsTable[index] + 1;
    this.setState({roundsWon: roundsTable}, () => {
      this.SaveAndResetPoints();
    });
  }
  SaveAndResetPoints = () => {
    let roundStatistics = this.state.roundStatistics;
    roundStatistics.push(this.state.team1Points, this.state.team2Points);
    this.setState({roundStatistics}, () => {
      this.setState({team1Points: 0, team2Points: 0}, () => {
        if(this.CheckIfSomeoneHasWon()){
          this.props.GameOver(this.StatisticJsonCreator());
        }
      });
    });
  }
  CheckIfSomeoneHasWon = () => {
    let returnValue = false;
    const { maxRounds, bestOfMaxRounds} = this.props;
    const { roundsWon } = this.state;
    let numberMaxRounds = Number(maxRounds);
    if(bestOfMaxRounds) {
      if(roundsWon.includes(numberMaxRounds)){
        returnValue = true;
      }
    } else {
      if(roundsWon[0] + roundsWon[1] === numberMaxRounds) {
        returnValue = true;
      }
    }
    return returnValue;
  }
  StatisticJsonCreator = () => {
    const { team1, team2, roundsWon, roundStatistics } = this.state;
    let stats = {
      team1,
      team2,
      roundsWon,
      roundStatistics 
    };
    this.setState({roundsWon: [0, 0], roundStatistics: []})
    return stats;
  }
  AddPoint = (team) => {
    let maxPointsNum = Number(this.props.maxPoints);
    if(team === 'team1') {
      let team1Points = this.state.team1Points + 1
      if(!this.state.serveOnTeam1){
        this.setState({serveOnTeam1: true});
      }
      this.setState({team1Points}, () => {
        if(team1Points === maxPointsNum) {
          this.EndRound('team1');
        }
      });
    } else {
      let team2Points = this.state.team2Points + 1
      if(this.state.serveOnTeam1){
        this.setState({serveOnTeam1: false});
      }
      this.setState({team2Points}, () => {
        if(team2Points === maxPointsNum) {
          this.EndRound('team2');
        }
      });
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
    const { team1, team2, team1Points, team2Points, serveOnTeam1, roundsWon} = this.state;
    return (
    <View style={[styles.row, styles.wrapper]}>
      <View style={[styles.mainContainer, styles.column]}>
        <View style={styles.row}>
          <Input value={team1} placeholder='Team1' name='team1'
          onChangeText={this.onChangeText} marginSide={'left'}/>
          <Text style={styles.rounds}>{roundsWon[0]}</Text>
        </View>
        <Team name='team1' points={team1Points}
          AddPoint={this.AddPoint} DeletePoint={this.DeletePoint}
          hasServe={serveOnTeam1} toggleServe={this.toggleServe}
        />
      </View>
      <View style={[styles.mainContainer, styles.column]}>
        <View style={styles.row}>
          <Text style={styles.rounds}>{roundsWon[1]}</Text>
          <Input value={team2} placeholder='Team2' name='team2'
          onChangeText={this.onChangeText} marginSide={'right'}/>
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
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  mainContainer: {
    marginHorizontal: 30,
    flex: 1,
    justifyContent: 'flex-end'
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
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
