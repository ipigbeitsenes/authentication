import React, { useState } from 'react'

export default function useFetch(url, method) {
    const [requestFetch, setRequestFetch] = useState(false)

    const setRequestRunnig = (dati) => {
        if (requestFetch) return
        setRequestFetch(true)
        fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dati)
        }).then((response) => {
            return response.json()
        }).then((response) => {
            setRequestFetch(false)
        }).catch((e) => {
            setRequestFetch(false)
        })
    }

    return [requestFetch, setRequestFetch]

}