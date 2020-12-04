import React, { useState, useRef, createRef } from 'react'
import { ScrollView, View } from 'react-native'
import ScreenContainer from '../components/ScreenContainer'
import Input from '../components/Input'
import Spacer from '../components/Spacer'
import Title from '../components/Title'
import Button from '../components/Button'
import useForm from '../hooks/useForm'
import apis from '../config/apis'
import useFetch from '../hooks/useFetch'
import Alert from '../components/Alert'

const inputs = [
  { label: 'Username', name: 'username', ref: createRef() },
  { label: 'Email', name: 'email', ref: createRef() },
  { label: 'Password', name: 'password', ref: createRef() },
  { label: 'Confirm Password', name: 'password_confirmation', ref: createRef() },
  { label: 'Name', name: 'name', ref: createRef() },
  { label: 'Surname', name: 'surname', ref: createRef() },
]

//TROVARE LUNGHEZZA NUMERO PROPRIETA DI UN OGGETO
/* const oggetto = {id: 1, nome: 'oggetto', length: 1000}

console.log(Object.keys(oggetto).length) */

export default function SignupScreen(props) {
  const requiredInputs = ['username', 'email', 'password', 'password_confirmation', 'name', 'surname']
  const [formData, setFormValue] = useForm(requiredInputs)
  //const [requestRunning, setRequestRunning] = useState(false)
  const [requestRunning, setRequestRunning] = useFetch(`${apis.baseUrl}/authentication/signup-action`, "POST")

  const [error, setError] = useState(false)

  const mailRef = useRef()
  const nameRef = useRef()

  //setRequestRunning(formData.values)
  //.then((response) => {console.log(response)})

  const submitSignup = () => {
    // verifico che non ci siano altre richieste in corso
    if (requestRunning) return

    // imposto la richiesta come in corso
    setRequestRunning({
      data: formData.values,
      onSucces: console.log('sucessful signup'),
      onFail: (err) => { setError(err) },
    })

    // invio richiesta
    /*  fetch(`${apis.baseUrl}/authentication/signup-action`, {
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
     }) */
  }


  return (
    <ScreenContainer>
      <Alert message={error || null}
        open={!!error}
        setOpen={setError}
        typology={error ? 'danger' : 'success'}

      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title label="Registrazione" centerText />
        <Spacer size={20} />
        {
          inputs.map(({ label, name, ref }, index) => {
            return (
              <View key={index}>
                <Input
                  ref={ref}
                  label={label}
                  //blurOnSubmit={index < inputs.length-1 ? false : true} e uguale a sotto
                  blurOnSubmit={!(index < inputs.length - 1)}

                  onTextChange={(text) => setFormValue(name, text)}
                  //passiamo focus da questo input a quello successivo con enter da tastiera
                  onSubmitEditing={() => {
                    //mailRef.current.focus()

                    const nextInput = inputs[index + 1]

                    if (nextInput) {
                      nextInput.ref.current.focus()
                    }

                  }}
                />
                <Spacer size={index < inputs.length - 1 ? 10 : 5} />
              </View>
            )
          })
        }


        <Button
          title="Registrati"
          disabled={requestRunning || !formData.valid}
          onPress={submitSignup}
        />
      </ScrollView>
    </ScreenContainer>
  )

}
