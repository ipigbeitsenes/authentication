import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthNavigator from './AuthNavigator'
import MainNavigator from './MainNavigator'
import apis from '../config/apis'

const AppStack = createStackNavigator()

export default function AppNavigator () {
  return (
    <AppStack.Navigator
      initialRouteName={apis.logged ? "MainNavigator" : "AuthNavigator"}
      screenOptions={{
        // headerShown: false
        cardStyle: { paddingTop: 0 }
      }}
    >
      <AppStack.Screen name="AuthNavigator" component={AuthNavigator} />
      <AppStack.Screen name="MainNavigator" component={MainNavigator} />
    </AppStack.Navigator>
  )
}