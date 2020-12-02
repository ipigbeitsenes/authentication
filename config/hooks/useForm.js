import React, { useState } from 'react';

const useForm = (requiredInputs) => {
    const [formValues, setFormValues] = useState({})
    const [formValid, setFormValid] = useState(false)

    const setFormValue = (name, value) => {
        const newFormValues = { ...formValues }
        newFormValues[name] = value
        setFormValues(newFormValues)

        const notEmptyKeys = Object.keys(newFormValues).filter((key) => )
    }

    return [FormData, setFormValue]
};

export default useForm;