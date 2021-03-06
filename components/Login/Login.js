import React from 'react';
import { View,Text,  StyleSheet, Image, KeyboardAvoidingView, Alert } from 'react-native';

import axios from 'axios';

import LoginForm from './LoginForm';

export default function Login({navigate, tournamentId}) {
  const userLogin = (referee) => {
    const url = `https://damp-river-31127.herokuapp.com/api/tournaments/${tournamentId}/referees/login`;
    axios.post(url, referee)
        .then(result => {
          if(result.status === 200) {
            const data = JSON.parse(result.config.data)
            const referee = {
              username: data.username,
              password: data.password,
              token: result.data.token
            }
            navigate(referee);
          } else {
            Alert.alert('Jokin meni vikaan kirjautumisessa',
            'Ota yhteys turnauksen järjestäjään');
          }
        })
      .catch(err => {
        Alert.alert('Väärä käyttäjänimi tai salasana',
        'Tarkista että antamasi tiedot ovat oikein');
      });
  }
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
        <LoginForm navigate={navigate} userLogin={userLogin}/>
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