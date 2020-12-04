import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import ScreenContainer from '../components/ScreenContainer'
import Input from '../components/Input'
import Spacer from '../components/Spacer'
import Title from '../components/Title'
import Button from '../components/Button'
import useForm from '../hooks/useForm'
import apis from '../config/apis'

export default function SignupScreen(props) {
  const requiredInputs = ['username', 'email', 'password', 'password_confirmation', 'name', 'surname']
  const [formData, setFormValue] = useForm(requiredInputs)
  const [requestRunning, setRequestRunning] = useState(false)

  const submitSignup = () => {
    // verifico che non ci siano altre richieste in corso
    if (requestRunning) return

    // imposto la richiesta come in corso
    setRequestRunning(true)

    // invio richiesta
    fetch(`${apis.baseUrl}/authentication/signup-action`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData.values)
    }).then((response) => {
      return response.json()
    }).then((response) => {
      setRequestRunning(false)
      console.log(response)
    }).catch((e) => {
      setRequestRunning(false)
    })
  }

  return (
    <ScrollView>
      <ScreenContainer>
        <Title label="Registrazione" centerText />
        <Spacer size={20} />
        <Input
          label="Username"
          blurOnSubmit={false}
          onTextChange={(text) => setFormValue('username', text)}
        />
        <Spacer size={10} />
        <Input
          label="Email"
          blurOnSubmit={false}
          onTextChange={(text) => setFormValue('email', text)}
        />
        <Spacer size={10} />
        <Input
          label="Name"
          blurOnSubmit={false}
          onTextChange={(text) => setFormValue('name', text)}
        />
        <Spacer size={10} />
        <Input
          label="Surname"
          blurOnSubmit={false}
          onTextChange={(text) => setFormValue('surname', text)}
        />
        <Spacer size={10} />
        <Input
          label="Password" 
          onTextChange={(text) => setFormValue('password', text)}
        />
        <Spacer size={10} />
        <Input
          label="Conferma password" 
          onTextChange={(text) => setFormValue('password_confirmation', text)}
        />
        <Spacer size={5} />
        <Button
          title="Registrati"
          disabled={requestRunning || !formData.valid}
          onPress={submitSignup}
        />
      </ScreenContainer>
    </ScrollView>
  )
}
