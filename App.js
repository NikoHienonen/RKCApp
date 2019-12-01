import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ScreenOrientation } from 'expo';

import Game from './components/Game';

export default function App() {
  // Lock screen to landscape
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  return (
    <View style={styles.container}>
      <Game/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
