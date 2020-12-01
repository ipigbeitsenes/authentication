import React, { useRef, useState } from 'react'
import ScreenContainer from '../components/ScreenContainer'
import Input from '../components/Input'
import Spacer from '../components/Spacer'
import Title from '../components/Title'
import Button from '../components/Button'

export default function LoginScreen(props) {
  const [formValues, setFormValues] = useState({})
  const [formValid, setFormValid] = useState(false)
  const passwordInput = useRef()
  const requiredInputs = ['username', 'password']

  const submitLogin = () => {
    console.log(username, password)
  }

  const changeFormValue = (name, value) => {
    const newFormValues = {...formValues}
    newFormValues[name] = value
    setFormValues(newFormValues)

    const notEmptyKeys = Object.keys(newFormValues).filter((key) => newFormValues[key] !== '')
    setFormValid(requiredInputs.every((el) => notEmptyKeys.includes(el)))
  }

  return (
    <ScreenContainer>
      <Title label="Login" centerText />
      <Spacer size={20} />
      <Input
        label="Username"
        onSubmitEditing={() => {
          passwordInput.current.focus() // quando si fa "invio" sulla tastiera il focus viene spostato all'input successivo
        }}
        blurOnSubmit={false} // serve a non far chiudere la tastiera quando si fa focus tramite passwordInput.current.focus()
        onTextChange={(text) => changeFormValue('username', text)}
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
