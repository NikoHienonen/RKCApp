import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function Input(props) {
  const { placeholder, value, onChangeText, name } = props;
  return (
    <View style={[styles.inputContainer, props.marginSide === 'right' ? {marginLeft: 10} : {marginRight: 10}]}>
      <TextInput value={value} placeholder={placeholder} style={styles.input}
      onChangeText={text => onChangeText(name, text)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent:'center',
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    fontSize: 20,
    color: 'black',
    lineHeight: 40,
    paddingHorizontal: "6%",
  }
});