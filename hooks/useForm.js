import React, { useState } from 'react'
/**
 * @function useForm
 * @param {array} requiredInputs -> Lista dei campi del form obbligatori.
 */

export default useForm(requiredInputs){
    const [formValues, setFormValues] = useState({})
    const [formValid, setFormValid] = useState (false)

    const formData = {
        values: formValues,
        valid: formValid
    }

    return [formData, setFormValue]

}