import React, { createRef, useRef, useState } from 'react'
import { ScrollView, View } from 'react-native'
import ScreenContainer from '../components/ScreenContainer'
import Input from '../components/Input'
import Spacer from '../components/Spacer'
import Title from '../components/Title'
import Button from '../components/Button'
import useForm from '../hooks/useForm'
import apis from '../config/apis'
import useFetch from '../hooks/useFetch'

export default function SignupScreen(props) {
  const requiredInputs = ['username', 'email', 'password', 'password_confirmation', 'name', 'surname']
  const [formData, setFormValue] = useForm(requiredInputs)
  const [requestRunning, setRequestRunning] = useFetch(`${apis.baseUrl}/authentication/signup-action`, "POST")
  const inputs = [
    { label: "Username", name: "username", ref: createRef() },
    { label: "Email", name: "email", ref: createRef() },
    { label: "Password", name: "password", ref: createRef() },
    { label: "Confirm Password", name: "password_confirmation", ref: createRef() },
    { label: "Name", name: "name", ref: createRef() },
    { label: "Surname", name: "surname", ref: createRef() },
  ]
  /*setRequestRunning(formData.values)
    .then((response) => {
      console.log(reponse)
    })*/

  const submitSignup = () => {
    // verifico che non ci siano altre richieste in corso
    if (requestRunning) return

    // imposto la richiesta come in corso
    setRequestRunning(true)

    // invio richiesta
    fetch(`${apis.baseUrl} / authentication / signup - action`, {
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
        {
          input.map(({ label, name, ref }, index) => {
            return (
              <View key={index}>
                <Input
                  ref={ref}
                  label={label}
                  blurOnSubmit={!index < inputs.length - 1}
                  onTextChange={(text) => setFormValue(name, text)}
                    onSubmitEditing={() => const= nextInput = inputs[index +1]
                    if(nextInput) {
                  nextInput.ref.current.focus()
                    }
                  }
                
                   

                />

        
                <Spacer size={10} />
              </View>

            )

              < Button
            title = "Registrati"
            disabled = { requestRunning || !formData.valid
          }
          onPress = { submitSignup }
            />
      </ScreenContainer>
    </ScrollView>
  )

}
