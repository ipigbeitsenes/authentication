import React, { useState, useRef, createRef, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
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
import api from '../Utility/api'
import { rootNavigation } from '../App'

const inputs = [
  { label: 'Username', name: 'username', ref: createRef() },
  { label: 'Email', name: 'email', ref: createRef() },
  { label: 'Password', type: 'password', name: 'password', ref: createRef() },
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
  //const [requestRunning, setRequestRunning] = useFetch(`${apis.baseUrl}/authentication/signup-action`, "POST")

  const [error, setError] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)
  const { user, manageUserData } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

  const submitSignup = async () => {
    // imposto la richiesta come in corso
    /*setRequestRunning({
      data: formData.values,
      onSuccess: () => {
        
         * Per il momento facciamo solo un log, poi quando saranno implementati sia
         * signup che login faremo un redirect alla homepage
         *
        console.log('sucessful signup')
      },
      onFail: (err) => {
        console.log(err)
        setError(err) // impostiamo il messaggio dell'Alert
        setMessageOpen(true) // apriamo l'Alert
      },
    })*/

    try {
      setLoading(true)
      const { result, errors, payload } = await api('authentication/signup-action', formData.values)
      if (result) {
        manageUserData(payload)
        rootNavigation.current.navigate('MainNavigator')
      } else {
        setError(errors[0].message)
        setMessageOpen(true)
      }

    } catch (err) {
      setError(err)
      setMessageOpen(true)

    } finally {
      setLoading(false)
    }

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
<<<<<<< HEAD
        {
          inputs.map(({ label, name, ref }, index) => {
            return (
              <View key={index}>
                <Input
                  ref={ref}
                  label={label}
                  // blurOnSubmit={index < inputs.length-1 ? false : true} e uguale a sotto
                  blurOnSubmit={!(index < inputs.length - 1)}
                  onTextChange={(text) => setFormValue(name, text)}
                  // passiamo focus da questo input a quello successivo con enter da tastiera
                  onSubmitEditing={() => {
                    const nextInput = inputs[index + 1]

                    if (nextInput) {
                      nextInput.ref.current.focus()
                    }
                  }}
                  secureTextEntry={inputs[index].name == 'password' || 'password_confirmation' ? true : false}
                />
                <Spacer size={index < inputs.length - 1 ? 10 : 5} />
              </View>
            )
          })
        }
=======
>>>>>>> salvatoreTelesco

        <Form inputs={inputs} updateInputValue={(name, text) => setFormValue(name, text)} />

        <Button
          disabled={loading || !formData.valid}
          onPress={submitSignup}
        >Registrati</Button>

        <Spacer size={10} />
      </ScrollView>
    </View>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======

}
>>>>>>> salvatoreTelesco
=======
}
>>>>>>> salvatoreTelesco
