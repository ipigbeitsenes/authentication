import React from 'react'
<<<<<<< HEAD
import { createStackNavigator } from '@react-navigation/stack';
import WelcomScreen from '../screens/WelcomeScreen'

export default function AuthNavigator () {
    const AuthStack = createStackNavigator();
    return (
        <AuthStack.navigator>
            <AuthStack.screen name='welcom' component= {WelcomScreen} /> 
        </AuthStack.navigator>
    )
}

 
=======
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'

const AuthStack = createStackNavigator()

export default function AuthNavigator () {
  return (
    <AuthStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        // headerShown: false
      }}
    >
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  )
}
>>>>>>> master
