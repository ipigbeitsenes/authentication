<<<<<<< HEAD
import React, { useContext, useState, createRef } from 'react'
=======
import React, { createRef, useRef, useState } from 'react'
>>>>>>> salvatoreTelesco
import { ScrollView, Text, View } from 'react-native'
import ScreenContainer from '../components/ScreenContainer'
import Input from '../components/Input'
import Spacer from '../components/Spacer'
import Title from '../components/Title'
import Form from '../components/Form'
import Button from '../components/Button'
import Alert from '../components/Alert'
import useForm from '../hooks/useForm'
import useFetch from '../hooks/useFetch'
import { AuthContext } from '../contexts/AuthContext'
import { layoutStyles } from '../styles/Layout'
import apis from '../config/apis'

const inputs = [
  { label: 'Email', name: 'username_email', ref: createRef(), autoCapitalize: 'none' },
  { label: 'Password', name: 'password', ref: createRef(), secureTextEntry: true },
]

export default function LoginScreen(props) {
  const requiredInputs = ['username_email', 'password']
  const [formData, setFormValue] = useForm(requiredInputs)
  const [error, setError] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)
  const [requestRunning, setRequestRunning] = useFetch(`${apis.baseUrl}/authentication/login-action`, "POST")
  const { manageUserData } = useContext(AuthContext)


  const [error, setError] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)

  const submitLogin = () => {
<<<<<<< HEAD
    // imposto la richiesta come in corso
    setRequestRunning({
      data: formData.values,
      onSuccess: (payload) => {
        manageUserData(payload)
      },
      onFail: (err) => {
        console.log(err)
        setError(err) // impostiamo il messaggio dell'Alert
        setMessageOpen(true) // apriamo l'Alert
      },
    })
  }

  return (
    <>
    <Alert open={messageOpen} message={error} onClose={() => setMessageOpen()} typology={error ? 'danger' : 'success'} />
    <View style={layoutStyles.container}>
      
=======

    // funzione che verifica se l'username è già utilizzato da altri utenti

    //if (!formData.values.username) return // evito di fare chiamate al server se l'utente non ha inserito nulla

    //if (requestRunning) return // verifico che non ci siano altre richieste in corso

    if (requestRunning) return

    setRequestRunning({
      data: formData.values,
      onSucces: () => {
        console.log('sucessful login')
      },
      onFail: (err) => {
        setError(err) // impostiamo il messaggio dell'Alert
        setMessageOpen(true) // apriamo l'Alert
      }
    })
  }

  // funzione che chiude l'alert senza modificare message e typology
  // const closeAlert = () => {
  //   const newAlertProps = {...alertProps}
  //   newAlertProps.status = false
  //   setAlertProps(newAlertProps)
  // }

  return (
    <View style={{ flex: 1 }}>
      <Alert
        message={error}
        open={messageOpen}
        onClose={() => setMessageOpen(false)}
        typology={error ? 'danger' : 'success'} />
>>>>>>> salvatoreTelesco

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false} // nasconde la scrollbar
        contentContainerStyle={layoutStyles.container}
        style={{ flexGrow: 1 }}>

        <Spacer size={10} />
        <Title label="Login" centerText />
        <Spacer size={10} />
<<<<<<< HEAD
        <Form inputs={inputs} updateInputValue={setFormValue} />
=======
        {
          inputs.map(({ label, name, ref }, index) => {
            return (
              <View key={index}>
                <Input

                  ref={ref}
                  label={label}
                  blurOnSubmit={!(index < inputs.length - 1)}
                  onTextChange={(text) => setFormValue(name, text)}
                  onSubmitEditing={() => {
                    const nextInput = inputs[index + 1]

                    if (nextInput) {
                      nextInput.ref.current.focus()
                    }

                  }}
                  secureTextEntry={inputs[index].name == 'password' ? true : false}
                />
                <Spacer size={index < inputs.length - 1 ? 10 : 5} />
              </View>

            )

          })
        }

>>>>>>> salvatoreTelesco
        <Button
          disabled={requestRunning || !formData.valid}
          onPress={submitLogin}
        >Accedi</Button>

      </ScrollView>

      <Spacer size={10} />
    </View>
    </>
  )

}


