import React from 'react';
import { View,Text,  StyleSheet, Image, KeyboardAvoidingView } from 'react-native';

import LoginForm from './LoginForm';

export default function Login({navigate}) {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.logo}
         source={require('../../assets/rkc_logo.png')}/>
         <Text style={styles.subTitle}>
           Login with the credentials you were given from the tournament organizer.
         </Text>
      </View>
      <View style={styles.form}>
        <LoginForm navigate={navigate}/>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#413E3A',
  },
  imgContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F58100',
  },
  logo: {
    width: 100,
    height: 100
  },
  subTitle: {
    color: 'white',
    width: 200,
    textAlign: 'center',
    opacity: 0.9,
    fontSize: 20
  },
});