import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './components/Input'
import Constants from 'expo-constants'
import Spacer from './components/Spacer'

const statusBarHeight = Constants.statusBarHeight

export default function App() {
  const passwordInput = useRef()  // ci serve per fare focus sull'input in cui la applichiamo

  return (
    <View style={styles.container}>
      <Input />
        <Spacer size={4} />
      <Input />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
