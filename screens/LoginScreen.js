import React, { useRef, useState, createRef } from 'react'
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
import { layoutStyles } from '../styles/Layout'
import apis from '../config/apis'

const alertPropsDefault = { status: false, message: '', typology: 'success' }

const inputs = [
  { label: 'Username', name: 'username_email', ref: createRef(), autoCapitalize: 'none' },
  { label: 'Password', name: 'password', ref: createRef(), secureTextEntry: true },
]

export default function LoginScreen(props) {
  const requiredInputs = ['username_email', 'password']
  const [formData, setFormValue] = useForm(requiredInputs)
  const [error, setError] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)
  const [requestRunning, setRequestRunning] = useFetch(`${apis.baseUrl}/authentication/login-action`, "POST")

  const submitLogin = () => {
    // verifico che non ci siano altre richieste in corso
    if (requestRunning) return

    // imposto la richiesta come in corso
    setRequestRunning({
      data: formData.values,
      onSucces: () => {
        /**
         * Per il momento facciamo solo un log, poi quando saranno implementati sia
         * signup che login faremo un redirect alla homepage
         */
        console.log('sucessful login')
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
        <Form inputs={inputs} updateInputValue={setFormValue} />
        <Button
          disabled={requestRunning || !formData.valid}
          onPress={submitLogin}
        >Login</Button>
        <Spacer size={10} />
      </ScrollView>
    </View>
    </>
  )
}
