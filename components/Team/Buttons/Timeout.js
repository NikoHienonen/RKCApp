import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Timeout() {
  const [used, toggleUsed] = useState(false);
  return (
    <TouchableOpacity style={[used ? styles.notUsed : styles.used, styles.circle]} 
      onPress={() => toggleUsed(!used)}>
      <Text style={styles.text}>T</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignContent: 'center'
  },
  notUsed: {
    backgroundColor: 'black'
  },
  used: {
    backgroundColor: 'orange'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 28
  }
})

