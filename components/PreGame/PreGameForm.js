import React from 'react';
import { Text, View, TextInput, Switch, StyleSheet } from 'react-native';

export default function PreGameForm(props) {
  const { rounds, points, bestOf, onChangeText, toggleBestOf } = props;
  return (
    <View style={styles.inputContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Max Rounds</Text>
        <TextInput style={styles.input} value={rounds.toString()}
        onChangeText={text => onChangeText('rounds', text)} keyboardType="numeric"/>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Max Points</Text>
        <TextInput style={styles.input} value={points.toString()}
        onChangeText={text => onChangeText('points', text)} keyboardType="numeric"/>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Best of max rounds?</Text>
        <Switch onValueChange={value => toggleBestOf()} value={bestOf}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 10,
    justifyContent:'center',
  },
  input: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: 'white',
    fontSize: 20,
    color: 'black',
    lineHeight: 40,
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5
  },
  text: {
    color: 'orange',
    fontSize: 20,
    marginRight: 5
  }
});