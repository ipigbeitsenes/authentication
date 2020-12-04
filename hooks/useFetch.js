import React, { useState } from 'react'
export default function useFetch(url,metodo){
    const [richiesta, setRichiesta] = useState(false)

    const setRequestRunning=(dati)=>{
        if (richiesta) return
        setRichiesta(true)
        fetch(url , {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dati)
      }).then((response) => {
        return response.json()
      }).then((response) => {
        setRichiesta(false)
        console.log(response)
      }).catch((e) => {
        setRichiesta(false)
      })}
    

    return [richiesta, setRequestRunning]
}