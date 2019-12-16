import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

import FormHandler from './FormHandler';
import ValidateValues from './ValidateValues';

const INITIAL_STATE = {
  username: '',
  password: ''
}

export default function LoginForm() {
  const {
    handleChange, handleBlur, submit, errors, values, isSubmitting
  } = FormHandler(INITIAL_STATE, ValidateValues);

  return (
    <View style={styles.container}>
      <TextInput 
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Username'
        placeholderTextColor='rgba(255,255,255,0.6)'
        returnKeyType="next"
        onSubmitEditing={() => passwordInput.focus()}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      />
      <Text style={styles.errorMsg}>{errors.username}</Text>
      <TextInput 
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Password'
        placeholderTextColor='rgba(255,255,255,0.6)'
        returnKeyType="go"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        ref={(input) => passwordInput = input}
        style={styles.input}
      />
      <Text style={styles.errorMsg}>{errors.password}</Text>
      <TouchableOpacity onPress={submit} disabled={isSubmitting}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#FFF',
    fontSize: 20
  },
  buttonContainer: {
    backgroundColor: '#F58100',
    paddingVertical: 15
  },
  buttonText:{
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
  errorMsg: {
    color: 'red',
    fontSize: 20,
    paddingVertical: 10
  }
})