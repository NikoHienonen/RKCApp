import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function RefreshButton({func}) {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.button} onPress={() => func()}>
        <Text style={styles.innerText}>Päivitä</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    marginBottom: '5%',
    alignContent: 'flex-end'
  },
  button :{
    backgroundColor: '#F58100',
    paddingVertical: '2%',
    paddingHorizontal: '1%',
    alignContent: 'center',
    borderColor: 'white',
    borderWidth: 3,
    width: '30%',
    alignSelf: 'flex-end'
  },
  innerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});