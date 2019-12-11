import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function Serve(props) {
  return (
    <TouchableOpacity 
      onPress={() => props.toggleServe()}>
      <View style={styles.circle}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'beige',
    padding: 10
  },
});