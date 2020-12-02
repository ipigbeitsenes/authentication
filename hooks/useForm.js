import React , {useState} from 'react'

export default function useForm(requiredInputs) {
  const [formValues,setFormValues] = useState({})
  const [formValid,setFormValid] = useState(false)


  const changeFormValue = (name, value) => {
    const newFormValues = {...formValues}
    newFormValues[name] = value
    setFormValues(newFormValues)

    const notEmptyKeys = Object.keys(newFormValues).filter((key) => newFormValues[key] !== '')

    // esempio esplicito di funzionamento del metodo every() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
    // let formIsValid = true
    // requiredInputs.forEach((input) => {
    //   if (!notEmptyKeys.includes(input)) {
    //     formIsValid = false
    //   }
    // })

    setFormValid(requiredInputs.every((el) => notEmptyKeys.includes(el)))
  }

  const formData = {
    values: formValues,
    valid: formValid
  }

  return [formData, setFormValue]
}
