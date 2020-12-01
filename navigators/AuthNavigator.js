import React from 'react'
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

 