import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './components/Input.js'
import ScreenContainer from './components/ScreenContainer.js';
import Spacer from './components/Spacer.js'


export default function App() {
  return (
    //<View style={styles.container}>
    <ScreenContainer>
      <Input />
      <StatusBar backgroundColor="transparen"t/>
      <Spacer size={4} />
      </ScreenContainer>
    //</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
