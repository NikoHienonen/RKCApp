import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ScreenOrientation } from 'expo';

import PreGameForm from '../PreGame/PreGameForm';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export default class PreGameScreen extends Component {
  static navigationOptions = ({navigation}) => {
    //let repo = navigation.getParam('gameStarts');
    return {
      title: 'Pre-Game',
      headerStyle: { backgroundColor: '#413E3A'},
      headerTintColor: 'orange' 
    };
  };
  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    const { getParam } = this.props.navigation;
    const match = getParam('match');
    if(match) {
      this.createState(match);
    } else {
      this.createState();
    }
  }
  state = {
    homeTeam: 'Team1',
    visitorTeam: 'Team2',
    maxPoints: 25, 
    maxRounds: 3, 
    bestOfMaxRounds: false,
    winByTwo: false,
    timeOuts: 2,
    homeTeam: 'Team1',
    visitorTeam: 'Team2'
  };
  createState = (match) => {
    if(match) {
      const { maxPoints, maxRounds, bestOfMaxRounds, winByTwo, timeOuts} = match.defaultMatch;
      const { homeTeam, visitorTeam } = match;
      this.setState({
        maxPoints,
        maxRounds,
        bestOfMaxRounds,
        winByTwo,
        timeOuts,
        homeTeam,
        visitorTeam
      });
    }
  } 
  handleChange = (text, name) => {
    this.setState({
      [name]: text
    });
  }

  toggleBestOf = () => {
    let bestOfMaxRounds = !this.state.bestOfMaxRounds;
    this.setState({bestOfMaxRounds});
  }
  toggleWinByTwo = () => {
    let winByTwo = !this.state.winByTwo;
    this.setState({winByTwo});
  }
  readyForNavigation = () => {
    const { navigate } = this.props.navigation;
    const { getParam } = this.props.navigation;
    const referee = getParam('referee');
    const match = getParam('match');
    const tournamentId = getParam('tournamentId');
    const { maxPoints, maxRounds, timeOuts } = this.state;
    console.log(this.state)
    if(maxPoints > 0 && maxRounds > 0 && timeOuts <= 2 && timeOuts >= 0) {
      navigate('Game', {
        data: this.state,
        referee: referee,
        tournamentId: tournamentId,
        match: match
      });
    } else {
      Alert.alert('Tarkista arvot');
    }
  }
  render() {
    const { maxPoints, maxRounds, bestOfMaxRounds, winByTwo, timeOuts } = this.state;
    return (
      <View style={styles.container}>
        <PreGameForm maxRounds={maxRounds} maxPoints={maxPoints} bestOfMaxRounds={bestOfMaxRounds} 
        winByTwo={winByTwo} timeOuts={timeOuts} toggleWinByTwo={this.toggleWinByTwo}
        onChangeText={this.handleChange} toggleBestOf={this.toggleBestOf} />
        <TouchableOpacity onPress={() => this.readyForNavigation()}
          style={styles.button}>
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#413E3A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginTop: 0,
    padding: 10,
    backgroundColor: 'orange'
  },
  buttonText: {
    color: 'white',
    fontSize: 25
  }
});
