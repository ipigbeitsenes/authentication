import React, { createContext, useCallback, useState } from 'react'
import { setToken } from '../Utility/api'
import AsyncStorage from '@react-native-community/async-storage'
import { rootNavigation } from '../Utility/navigation'
import { CommonActions } from '@react-navigation/native'

export const AuthContext = createContext()

export default function AuthProvider ({ children }) {
  const [user, setUser] = useState()

  const manageUserData = useCallback(async (userData) => {
    console.log(userData)
    setUser(userData.user)
    setToken(userData.token)
    AsyncStorage.setItem('AuthToken', userData.token)
  }, [])

  const onLogout = useCallback(async () => {
    // cancello la storia di navigazione e vado sulla schermata di autenticazione
    rootNavigation.current.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: "AuthNavigator" }]
    }))

    setUser(null)
    setToken('')
    AsyncStorage.removeItem('AuthToken') // cancello token dalla memoria
  }, [])

  return (
    <AuthContext.Provider value={{ token, setTokenProv, user, manageUserData, onLogout }}>
      {children}
    </AuthContext.Provider>
  )
}
