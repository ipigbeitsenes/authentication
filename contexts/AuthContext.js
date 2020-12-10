import { useLinkProps } from '@react-navigation/native'
import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthProvider() {
    const [userToken, setUserToken] = useState('')

    return (
        <AuthContext.Provider value={{userToken, setUserToken}}>
            {props.children}
        </AuthContext.Provider>
    )
}