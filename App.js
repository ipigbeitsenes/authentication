import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Input from './components/Input'
import Spacer from './components/Spacer'
import Constants from 'expo-constants'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='transparent' />
      <Input />
      <Spacer size={4} horizontal={false} />
      <Input />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
