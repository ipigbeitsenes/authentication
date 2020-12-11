import { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { setToken } from '../Utility/api'
import { AuthContext } from '../contexts/AuthContext'

export default function useLoader() {
    const [loading, setLoading] = useState(true)
    const { manageUserData } = useContext(AuthContext)

    useEffect(() => {
        const load = async () => {
            const token = await AsyncStorage.getItem('AuthToken')
            if (token) {
                setToken(JSON.parse(token))
                try {
                    const { result, payload } = await api('authentication/refresh_token')
                    if (result) {
                        manageUserData(payload)
                    }
                } catch (err) {
                    console.log(err)
                }
            }
            setLoading(false)
        }
        load();
    }, [])
    return loading
}