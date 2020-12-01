import React from 'react'
<<<<<<< HEAD
import {View, Text} from 'react-native'

function WelcomeScreen () {
    return (
        <View>
            <Text>welcome</Text>
        </View>
    )
}
export default WelcomeScreen
=======
import { Text, View } from 'react-native'
import ScreenContainer from '../components/ScreenContainer'
import Title from '../components/Title'
import Button from '../components/Button'
import Spacer from '../components/Spacer'

export default function WelcomeScreen(props) {
  return (
    <ScreenContainer>
      <Title label="Welcome" centerText />
      <Spacer size={20} />
      <Button
        onPress={() => props.navigation.navigate('Login')}
        title="Login"
      />
      <Spacer size={5} />
      <Button
        onPress={() => props.navigation.navigate('Signup')}
        title="Registrati"
      />
    </ScreenContainer>
  )
}
>>>>>>> master
