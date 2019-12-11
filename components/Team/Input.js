import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function Input(props) {
  const { placeholder, value, onChangeText, name } = props;
  return (
    <View style={styles.inputContainer}>
      <TextInput value={value} placeholder={placeholder} style={styles.input}
      onChangeText={text => onChangeText(name, text)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1
  },
  input: {
    alignSelf: 'stretch',
    borderColor: 'white',
    borderWidth: 1
  }
});