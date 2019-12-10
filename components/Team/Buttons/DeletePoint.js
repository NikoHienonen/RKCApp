import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function DeletePoint(props) {
  return (
    <TouchableOpacity style={styles.minusPoint}
      onPress={() => props.DeletePoint(props.name)}>
      <Text style={styles.minusPointText}>-1</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  minusPoint: {
    backgroundColor: 'orange',
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignContent: 'center'
  },
  minusPointText :{
    fontSize: 25,
    color: 'white',
    textAlign: 'center'
  },
});