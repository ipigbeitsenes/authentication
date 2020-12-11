import React, { createContext, useCallback, useState } from 'react'
import { setToken } from '../Utility/api'
import AsyncStorage from '@react-native-community/async-storage'

export const AuthContext = createContext()

export default function AuthProvider ({ children }) {
  const [user, setUser] = useState()
  const [token, setTokenProv]=useState()

  const manageUserData = useCallback(async (userData) => {
    console.log(userData)
    setUser(userData.user)
    setToken(userData.token)
    await AsyncStorage.setItem('AuthToken', userData.token)
    setTokenProv(userData.token)
  }, [])

  return (
    <AuthContext.Provider value={{ token, setTokenProv, user, manageUserData }}>
      {children}
    </AuthContext.Provider>
  )
}
