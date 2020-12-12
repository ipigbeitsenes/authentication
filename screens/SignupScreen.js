import React, { useState, useRef, createRef } from 'react'
import { ScrollView, View } from 'react-native'
import ScreenContainer from '../components/ScreenContainer'
import Input from '../components/Input'
import Spacer from '../components/Spacer'
import Title from '../components/Title'
import Button from '../components/Button'
import Form from '../components/Form'
import useForm from '../hooks/useForm'
import apis from '../config/apis'
import useFetch from '../hooks/useFetch'
import Alert from '../components/Alert'
import { layoutStyles } from '../styles/Layout'

const inputs = [
  { label: 'Username', name: 'username', ref: createRef(), autoCapitalize: 'none' },
  { label: 'Email', name: 'email', ref: createRef(), autoCapitalize: 'none' },
  { label: 'Password', name: 'password', ref: createRef(), secureTextEntry: true },
  { label: 'Confirm Password', name: 'password_confirmation', ref: createRef(), secureTextEntry: true },
  { label: 'Name', name: 'name', ref: createRef() },
  { label: 'Surname', name: 'surname', ref: createRef() },
]

//TROVARE LUNGHEZZA NUMERO PROPRIETA DI UN OGGETO
/* const oggetto = {id: 1, nome: 'oggetto', length: 1000}
console.log(Object.keys(oggetto).length) */

export default function SignupScreen(props) {
  const requiredInputs = ['username', 'email', 'password', 'password_confirmation', 'name', 'surname']
  const [formData, setFormValue] = useForm(requiredInputs)
  const [requestRunning, setRequestRunning] = useFetch(`${apis.baseUrl}/authentication/signup-action`, "POST")

  const [error, setError] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)

  const submitSignup = () => {
    // imposto la richiesta come in corso
    setRequestRunning({
      data: formData.values,
      onSuccess: () => {
        /**
         * Per il momento facciamo solo un log, poi quando saranno implementati sia
         * signup che login faremo un redirect alla homepage
         */
        console.log('sucessful signup')
      },
      onFail: (err) => {
        console.log(err)
        setError(err) // impostiamo il messaggio dell'Alert
        setMessageOpen(true) // apriamo l'Alert
      },
    })
  }


  return (
    <View style={{ flex: 1 }}>
      <Alert
        message={error}
        open={messageOpen}
        onClose={() => setMessageOpen(false)}
        typology={error ? 'danger' : 'success'}
      />

      <ScrollView
        /**
         * `keyboardShouldPersistTaps="handled"`
         * fa in modo che quando un input è in focus, se si clicca
         * su un'altra parte dello schermo la tastiera venga chiusa
        */
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false} // nasconde la scrollbar
        contentContainerStyle={layoutStyles.container}
        style={{ flexGrow: 1 }}
      >
        <Spacer size={10} />
        <Title label="Registrazione" centerText />
        <Spacer size={10} />

        <Form inputs={inputs} updateInputValue={(name, text) => setFormValue(name, text)} />

        <Button
          disabled={requestRunning || !formData.valid}
          onPress={submitSignup}
        >Registrati</Button>

        <Spacer size={10} />
      </ScrollView>
    </View>
  )
}