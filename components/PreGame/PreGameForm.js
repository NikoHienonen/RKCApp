import React from 'react';
import { Text, View, TextInput, Switch, StyleSheet } from 'react-native';
import { ScreenOrientation } from 'expo';
export default function PreGameForm(props) {
  const { maxRounds, maxPoints, bestOfMaxRounds, onChangeText, toggleBestOf,
  toggleWinByTwo, winByTwo, timeOuts } = props;
  return (
    <View style={styles.inputContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Max Rounds</Text>
        <TextInput style={styles.input} value={maxRounds.toString()}
        onChangeText={text => onChangeText(text, 'maxRounds')} keyboardType="numeric"/>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Max Points</Text>
        <TextInput style={styles.input} value={maxPoints.toString()}
        onChangeText={text => onChangeText(text, 'maxPoints')} keyboardType="numeric"/>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Timeouts</Text>
        <TextInput style={styles.input} value={timeOuts.toString()} 
        onChangeText={text => onChangeText(text, 'timeOuts')} keyboardType="numeric"/>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Best of max rounds?</Text>
        <Switch onValueChange={value => toggleBestOf()} value={bestOfMaxRounds}/>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Win by two?</Text>
        <Switch onValueChange={value => toggleWinByTwo()} value={winByTwo}/>
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