import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input from './components/Input'
import Constants from 'expo-constants'
import Spacer from './components/Spacer'
import ScreenContainer from './components/ScreenContainer'
import { layoutStyles } from './styles/Layout'

const statusBarHeight = Constants.statusBarHeight

export default function App() {
  return (
    <ScreenContainer style={layoutStyles.container}>
    <StatusBar backgroundColor="transparent" />
      
      <Spacer size={10} />
      <Input />
    
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
