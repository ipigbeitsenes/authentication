import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './components/Input.js';
import Spacer from './components/Spacer.js';
import Constants from 'expo-constants';
import sizes from './config/sizes.js';

const statusBarHeigth = Constants.statusBarHeight

export default function App() {
  return (
    <View style={styles.container}>
      <Input>
      <Spacer size = {4}/>
      </Input>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
