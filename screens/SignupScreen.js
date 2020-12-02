import React, { useState } from 'react'
import ScreenContainer from '../components/ScreenContainer'
import Input from '../components/Input'
import Spacer from '../components/Spacer'
import Title from '../components/Title'
import Button from '../components/Button'

export default function SignupScreen(props) {
  const [formValues, setFormValues] = useState({})
  const [formValid, setFormValid] = useState(false)
  const requiredInputs = ['username', 'email', 'password', 'password_confirmation', 'name', 'surname']

  const [formData, setFormValue] = useForm(['username', 'email', 'password', 'password_confirmation', 'name', 'surname'])

  formData = {
    values: {
      username: '...'
    },
    valid: true|false
  }

  const submitSignup = () => {
    console.log(username, password)
  }

  const changeFormValue = (name, value) => {
    const newFormValues = {...formValues}
    newFormValues[name] = value
    setFormValues(newFormValues)

    const notEmptyKeys = Object.keys(newFormValues).filter((key) => newFormValues[key] !== '')

    // esempio esplicito di funzionamento del metodo every() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
    // let formIsValid = true
    // requiredInputs.forEach((input) => {
    //   if (!notEmptyKeys.includes(input)) {
    //     formIsValid = false
    //   }
    // })

    setFormValid(requiredInputs.every((el) => notEmptyKeys.includes(el)))
  }

  return (
    <ScreenContainer>
      <Title label="Login" centerText />
      <Spacer size={20} />
      <Input
        label="Username"
        blurOnSubmit={false}
        onTextChange={(text) => changeFormValue('username', text)}
      />
      <Spacer size={10} />
      <Input
        label="Password"
        isPassword 
        onTextChange={(text) => changeFormValue('password', text)}
      />
      <Spacer size={10} />
      <Input
        label="Conferma password"
        isPassword 
        onTextChange={(text) => changeFormValue('password_confirmation', text)}
      />
      <Spacer size={5} />
      <Button
        title="Registrati"
        disabled={!formValid}
        onPress={submitSignup}
      />
    </ScreenContainer>
  )
}
