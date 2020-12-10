import React, { useRef, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import ScreenContainer from '../components/ScreenContainer'
import Input from '../components/Input'
import Spacer from '../components/Spacer'
import Title from '../components/Title'
import Button from '../components/Button'
import Alert from '../components/Alert'
import useForm from '../hooks/useForm'
import { layoutStyles } from '../styles/Layout'

const alertPropsDefault = { status: false, message: '', typology: 'success' }

export default function LoginScreen(props) {
  // const [alertProps, setAlertProps] = useState(alertPropsDefault)
  const passwordInput = useRef()
  const requiredInputs = ['username', 'password']
  const [formData, setFormValue] = useForm(requiredInputs)

  const submitLogin = () => {
    setTimeout(() => { // finta chiamata alle API
      const response = { result: true, error: 'Password non valida' } // finta risposta delle API
      setAlertProps({ status: true, message: response.result ? 'Credenziali valide' : response.error, typology: response.result ? 'success' : 'danger' })
    }, 500)
  }

  // funzione che verifica se l'username è già utilizzato da altri utenti
  const submitUsername = () => {
    if (!formData.values.username) return // evito di fare chiamate al server se l'utente non ha inserito nulla

    setTimeout(() => { // finta chiamata alle API
      const response = { result: false, error: 'Username già utilizzato' } // finta risposta delle API
      if (response.result) return

      setAlertProps({ status: true, message: response.error, typology: 'danger' })
    }, 500)
  }

  // funzione che chiude l'alert senza modificare message e typology
  // const closeAlert = () => {
  //   const newAlertProps = {...alertProps}
  //   newAlertProps.status = false
  //   setAlertProps(newAlertProps)
  // }
  const [messageOpen, setMessageOpen] = useState(false)

  return (
    <View style={layoutStyles.container}>
      <Alert open={messageOpen} message={null} onClose={() => closeAlert()} typology="success" />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        /**
         * `keyboardShouldPersistTaps="handled"`
         * fa in modo che quando un input è in focus, se si clicca
         * su un'altra parte dello schermo la tastiera venga chiusa
        */
        showsVerticalScrollIndicator={false} // nasconde la scrollbar
      >
        <Spacer size={10} />
        <Title label="Login" centerText />
        <Spacer size={10} />
        <Input
          label="Username"
          onSubmitEditing={() => {
            passwordInput.current.focus() // quando si fa "invio" sulla tastiera il focus viene spostato all'input successivo
          }}
          blurOnSubmit={false} // serve a non far chiudere la tastiera quando si fa focus tramite passwordInput.current.focus()
          onTextChange={(text) => setFormValue('username', text)}
          autoCapitalize='none'
          onBlurChange={() => {
            submitUsername()
          }}
        />
        <Spacer size={10} />
        <Input
          label="Password"
          ref={passwordInput}
          isPassword
          onTextChange={(text) => setFormValue('password', text)}
        />
        <Spacer size={5} />

        <Button
          disabled={!formData.valid}
          onPress={submitLogin}
        >
          Login
        </Button>
        
        <Spacer size={10} />
      </ScrollView>
    </View>
  )
}
