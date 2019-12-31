import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import Matches from '../Matches/Matches';

export default class MatchesScreen extends Component {
  static navigationOptions = ({navigation}) => {
    //let repo = navigation.getParam('gameStarts');
    return {
      title: 'Matches',
      headerStyle: { backgroundColor: '#413E3A'},
      headerTintColor: 'orange' 
    };
  };
  state = {
    referee: '',
    tournamentId: ''
  }
  componentDidMount() {
    const referee = this.props.navigation.getParam('referee');
    const tournamentId = this.props.navigation.getParam('tournamentId');
    this.setState({referee, tournamentId});
  }
  navigate = match => {
    const {navigate} = this.props.navigation;
    navigate('PreGame', {
      tournamentId: this.state.tournamentId,
      match: match,
      referee: this.state.referee
    });
  }
  render(){
    const { referee, tournamentId } = this.state;
    return (
    <View style={styles.container}>
      {
        !referee || !tournamentId
        ? <Text>No Matches</Text>
        : <Matches tournamentId={tournamentId} referee={referee} navigate={this.navigate}/>
      }
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
});
