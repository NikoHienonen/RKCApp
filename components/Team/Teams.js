import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';

import Team from './Team';
import Input from './Input';

export default class Teams extends Component {
  constructor(props) {
    super(props);
    const { homeTeam, visitorTeam, timeOuts } = this.props;
    this.state = {
      team1: homeTeam ? homeTeam : 'Team1',
      team2: visitorTeam ? visitorTeam : 'Team2',
      timeOuts: timeOuts,
      team1Points: 0,       // Points of team1
      team2Points: 0,       // Points of team1
      roundsWon: [0, 0],    // A list of how many rounds each team has won.
      roundStatistics: [],  // A list of how many points each team got in a rounds
      serveOnTeam1: true    // Is team1 serving
    };
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
    console.log(roundStatistics)
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
    this.setState({roundsWon: [0, 0], roundStatistics: []});
    return stats;
  }

  roundWinCheck = (t1Points, t2Points) => {
    // Notice that the team names do NOT correspond the state names
    const { winByTwo, maxPoints } = this.props;
    let maxPointsNum = Number(maxPoints);
    let returnValue = false;
    if(t1Points >= maxPointsNum) {
      // If the team has at least or over the maxPoints
      if(winByTwo) {
        if(t1Points > t2Points && t1Points - t2Points !== 1) {
          returnValue = true;
        } else {
          returnValue = false;
        }
      } else {
        // If no winByTwo, the team has won the rounds, return true
        returnValue = true;
      }
    } else {
      // Team has NOT reached the maximum points, return false
      returnValue = false;
    }
    return returnValue;
  }
  
  AddPoint = (team) => {
    if(team === 'team1') {
      let team1Points = this.state.team1Points + 1
      if(!this.state.serveOnTeam1){
        this.setState({serveOnTeam1: true});
      }
      this.setState({team1Points}, () => {
        if(this.roundWinCheck(team1Points, this.state.team2Points)){
          this.EndRound('team1');
        }
      });
    } else {
      let team2Points = this.state.team2Points + 1
      if(this.state.serveOnTeam1){
        this.setState({serveOnTeam1: false});
      }
      this.setState({team2Points}, () => {
        if(this.roundWinCheck(team2Points, this.state.team1Points)){
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
  createStatString = (results) => {
    let resultString = '[';
    if(results.length !== 0) {
      for(i = 0; i < results.length; i++){
        resultString = resultString+results[i];
        let separator = i % 2 == 0 ? ' - ' : ', ';
        if(i !== results.length-1){
          resultString = resultString+separator;
        } else {
          resultString = resultString + ']';
        }
      }
    } else {
      resultString = resultString + ' ]';
    }
    return resultString;
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
    const { team1, team2, team1Points, team2Points, serveOnTeam1, roundsWon, timeOuts,
      roundStatistics} = this.state;
    return (
    <View style={[styles.column, styles.wrapper]}>
      <Text style={styles.prevRounds}>{this.createStatString(roundStatistics)}</Text>
      <View style={styles.row}>
      <View style={[styles.mainContainer, styles.column]}>
        <View style={styles.row}>
          <Input value={team1} placeholder='Team1' name='team1'
          onChangeText={this.onChangeText} marginSide={'left'}/>
          <Text style={styles.rounds}>{roundsWon[0]}</Text>
        </View>
        <Team name='team1' points={team1Points}
          AddPoint={this.AddPoint} DeletePoint={this.DeletePoint}
          hasServe={serveOnTeam1} toggleServe={this.toggleServe}
          timeOuts={timeOuts}
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
          timeOuts={timeOuts}
        />
      </View>
    </View>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 'auto',
    justifyContent: 'space-around'
  },
  mainContainer: {
    margin: "2%",
    flex: 1,
    justifyContent: 'space-between',
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
  },
  rounds: {
    color: 'white',
    fontSize: 35
  },
  prevRounds: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '1%'
  }
})
