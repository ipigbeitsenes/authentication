import React, { useState } from 'react'
export default function useFetch(url, method) {

  const [request, setRequest] = useState(false)

  const setRequestRunning = ({ data, onSuccess, onFail }) => {
    /*  if (request) return
     setRequest(true)
     fetch(url, {
       method,
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     }).then((response) => {
       return response.json()
     }).then((response) => {
       setRequest(false)
       console.log(response)
     }).catch((e) => {
       setRequest(false)
     })
   } */

    if (request) return
    setRequest(true)
    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then((response) => {
      return response.json()
    }).then((response) => {
      if (response.result) {
        if (onSuccess) {
          onSuccess(response.payload)
        }
      } else if (onFail) {
        onFail(response.errors[0].message)
      }
      console.log(response)
    }).catch((e) => {
      if (onFail) {
        onFail(e)
      }
    }).finally(() => {
      setRequest(false)
    })
  }


  return [request, setRequestRunning]
}