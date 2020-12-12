import React from 'react'

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Input from './components/Input'
import Spacer from './components/Spacer'
import Constants from 'expo-constants'
import ScreenContainer from './components/ScreenContainer'
import { layoutStyles } from './styles/Layout'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './contexts/AuthContext'
import AppNavigator from './navigators/AppNavigator'

const statusBarHeight = Constants.statusBarHeight

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
