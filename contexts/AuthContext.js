import React, { createContext, useState } from 'react'
import { setToken } from '../Utility/api'
import AsyncStorage from '@react-native-community/async-storage'

export const AuthContext = createContext()

export default function AuthProvider(props) {

  const [user, setUser] = useState()
  const [token, setTokenProv] = useState()

  const manageUserData = async (userData) => {
    console.log(userData)
    setUser(userData.user)
    setToken(userData.token)
    setTokenProv(userData.token)
    await AsyncStorage.setItem('AuthToken', userData.token)

  }

  return (
    <AuthContext.Provider value={{ token, setTokenProv, user, manageUserData }}>
      {props.children}
    </AuthContext.Provider>
  )
}
