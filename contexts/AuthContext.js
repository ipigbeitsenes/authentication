import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider (props) {
  const [userToken, setUserToken] = useState('')
  const [userName, setUserName] = useState('')

  const manageUserData = (userData) => {
    console.log(userData)
    setUserToken(userData.token)
  }

  return (
    <AuthContext.Provider value={{ userToken, userName, manageUserData }}>
      {props.children}
    </AuthContext.Provider>
  )
}
