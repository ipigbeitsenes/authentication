import React, { useContext, useState, createRef } from 'react'
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
import api from '../Utility/api'
import { rootNavigation } from '../App'

const inputs = [
  { label: 'Username', name: 'username_email', ref: createRef() },
  { label: 'Password', name: 'password', ref: createRef(), secureTextEntry: true },
]

export default function LoginScreen({ navigation, route }) {
  const requiredInputs = ['username_email', 'password']
  const [formData, setFormValue] = useForm(requiredInputs)
  const [error, setError] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)
  //const [requestRunning, setRequestRunning] = useFetch(`${apis.baseUrl}/authentication/login-action`, "POST")
  const { manageUserData } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

  const submitLogin = async () => {
    // imposto la richiesta come in corso
    /*setRequestRunning({
      data: formData.values,
      onSuccess: (payload) => {
        manageUserData(payload)
      },
      onFail: (err) => {
        console.log(err)
        setError(err) // impostiamo il messaggio dell'Alert
        setMessageOpen(true) // apriamo l'Alert
      },
    })*/
    try {
      setLoading(true)
      const response = await api('authentication/login-action', formData.values)
      const { result, errors, payload } = response
      if (result) {
        manageUserData(payload)
        //navigation.navigate('Dashboard')
        rootNavigation.current.navigate('MainNavigator')
      } else {
        setError(errors[0].message)
        setMessageOpen(true)
      }

    } catch (err) {
      console.warn(err)
      setError(err)
      setMessageOpen(true)

    } finally {
      setLoading(false)
    }




  }

  return (
    <>
      <Alert open={messageOpen} message={error} onClose={() => setMessageOpen()} typology={error ? 'danger' : 'success'} />
      <View style={layoutStyles.container}>


        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false} // nasconde la scrollbar
          contentContainerStyle={layoutStyles.container}
          style={{ flexGrow: 1 }}>

          <Spacer size={10} />
          <Title label="Login" centerText />
          <Spacer size={10} />
          <Form inputs={inputs} updateInputValue={setFormValue} />
          <Button
            disabled={loading || !formData.valid}
            onPress={submitLogin}
          >Accedi</Button>

        </ScrollView>

        <Spacer size={10} />
      </View>
    </>
  )

}


