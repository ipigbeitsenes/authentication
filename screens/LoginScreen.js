import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import ScreenContainer from '../components/ScreenContainer'
import Input from '../components/Input'
import Spacer from '../components/Spacer'
import Title from '../components/Title'
import Button from '../components/Button'
import Alert from '../components/Alert'

const alertPropsDefault = { status: false, message: '', typology: 'success' }

export default function LoginScreen(props) {
  const [formValues, setFormValues] = useState({})
  const [formValid, setFormValid] = useState(false)
  const [alertProps, setAlertProps] = useState(alertPropsDefault)
  const passwordInput = useRef()
  const requiredInputs = ['username', 'password']

  const submitLogin = () => {
    setTimeout(() => { // finta chiamata alle API
      const response = { result: true, error: 'Password non valida' } // finta risposta delle API
      setAlertProps({ status: true, message: response.result ? 'Credenziali valide' : response.error, typology: response.result ? 'success' : 'danger' })
    }, 500)
  }

  const submitUsername = () => {
    if (!formValues.username) return // evito di fare chiamate al server se l'utente non ha inserito nulla

    setTimeout(() => { // finta chiamata alle API
      const response = { result: false, error: 'Username già utilizzato' } // finta risposta delle API
      if (response.result) return

      setAlertProps({ status: true, message: response.error, typology: 'danger' })
    }, 500)
  }

  const changeFormValue = (name, value) => {
    setAlertProps(alertPropsDefault)

    const newFormValues = {...formValues}
    newFormValues[name] = value
    setFormValues(newFormValues)

    const notEmptyKeys = Object.keys(newFormValues).filter((key) => newFormValues[key] !== '')
    setFormValid(requiredInputs.every((el) => notEmptyKeys.includes(el)))
  }


  const closeAlert = () =>{
    console.log('executed')
    const newAlertProps = {...alertProps}
    newAlertProps.status = false
    setAlertProps(newAlertProps)
  }

  return (
    <ScreenContainer>
      {/* <Alert status={alertProps.status} message={alertProps.message} typology={alertProps.typology} onClose={() => {}} /> */}
      <Alert {...alertProps} onClose={() => closeAlert()} />
      <Title label="Login" centerText />
      <Spacer size={20} />
      <Input
        label="Username"
        onSubmitEditing={() => {
          passwordInput.current.focus() // quando si fa "invio" sulla tastiera il focus viene spostato all'input successivo
        }}
        blurOnSubmit={false} // serve a non far chiudere la tastiera quando si fa focus tramite passwordInput.current.focus()
        onTextChange={(text) => changeFormValue('username', text)}
        autoCapitalize='none'
        onBlur={() => {
          submitUsername()
        }}
      />
      <Spacer size={10} />
      <Input
        label="Password"
        ref={passwordInput}
        isPassword
        onTextChange={(text) => changeFormValue('password', text)}
      />
      <Spacer size={5} />
      <Button
        title="Accedi"
        disabled={!formValid}
        onPress={submitLogin}
      />
    </ScreenContainer>
  )
}
