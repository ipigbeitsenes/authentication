import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Input from './components/Input'
import Constants from 'expo-constants'
import ScreenContainer from './components/ScreenContainer'
import { layoutStyles } from './styles/Layout'

import Spacer from './components/Spacer';

// Initialize a new array with 5 elements
//  .fill(null) fill the elements with null
// If this is inside the function, it gets initialized every time
const arr = (new Array(5)).fill(null)

const StatusBarHeight = Constants.StatusBarHeight

export default function App() {
  return (
    <ScreenContainer style={layoutStyles.container}>
      <StatusBar backgroundColor='red' />

      <View style={styles.container}>
        <Input />
        {/* <Spacer size={4} /> */}
        {/* <Text>First page, life is good</Text> */}
        {/* <Input /> */}
        {/* <TouchableOpacity name='Toca chi'>
          <Text>Toca Chi</Text>
        </TouchableOpacity> */}
      </View>
    </ScreenContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
