import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function AddPoint(props) {
  return (
    <TouchableOpacity style={styles.points}
      onPress={() => props.AddPoint(props.name)}>
      <Text style={styles.pointsText}>{props.points.toString()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  points: {
    backgroundColor: '#F58100',
    padding: 20,
    minWidth: 120,
    alignContent: 'center',
    marginVertical: 10
  },
  pointsText: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center'
  },
});