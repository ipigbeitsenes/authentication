import React, { createRef, useRef, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import ScreenContainer from '../components/ScreenContainer'
import Input from '../components/Input'
import Spacer from '../components/Spacer'
import Title from '../components/Title'
import Button from '../components/Button'
import Alert from '../components/Alert'
import useForm from '../hooks/useForm'
import { layoutStyles } from '../styles/Layout'
import useFetch from '../hooks/useFetch'
import apis from '../config/apis'
import Forms from '../components/Forms'

const inputs = [
  { label: 'Username', name: 'username_email', ref: createRef() },
  { label: 'Password', type: 'password', name: 'password', ref: createRef() }
]

export default function LoginScreen(props) {
  // const [alertProps, setAlertProps] = useState(alertPropsDefault)
  const [requestRunning, setRequestRunning] = useFetch(`${apis.baseUrl}/authentication/login-action`, "POST")
  const requiredInputs = ['username_email', 'password']
  const [formData, setFormValue] = useForm(requiredInputs)


  const [error, setError] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)

  const submitLogin = () => {

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

  console.log(inputs)
  return (
    <View style={{ flex: 1 }}>
      <Alert
        message={error}
        open={messageOpen}
        onClose={() => setMessageOpen(false)}
        typology={error ? 'danger' : 'success'} />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false} // nasconde la scrollbar
        contentContainerStyle={layoutStyles.container}
        style={{ flexGrow: 1 }}>

        <Spacer size={10} />
        <Title label="Login" centerText />
        <Spacer size={10} />
        <Forms ></Forms>

          <Button
            disabled={requestRunning || !formData.valid}
            onPress={submitLogin}
          >Accedi</Button>

      </ScrollView>

      <Spacer size={10} />
    </View>
  )

}


