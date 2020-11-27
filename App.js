import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'


import Input from './components/Input'
import Spacer from './components/Spacer'
import ScreenContainer from './components/ScreenContainer'


const StatusBarHeight = Constants.StatusBarHeight;

export default function App() {
  return (
    // <View style={styles.container}>
      <ScreenContainer>
      <StatusBar backgroundColor="trasparent" />
      <Input />
      <Spacer size={4} />
      <Input />
      </ScreenContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
