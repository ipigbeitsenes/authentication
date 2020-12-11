import React from 'react'
import { View } from 'react-native'
import Input from '/Input'
import Spacer from './Spacer'

export default function Form(props){
    return (
        <>
        {
            props.inputs.map(({ label, name, ref }, index) => {
              return (
                <View key={index}>
                  <Input
                    ref={ref}
                    label={label}
                    blurOnSubmit={!(index < props.inputs.length - 1)}
                    onTextChange={(text) => setFormValue(name, text)}
                    onSubmitEditing={() => {
                      const nextInput = props.inputs[index + 1]
                      if (nextInput) {
                        nextInput.ref.current.focus()
                      }
                    }}
                  />
                  <Spacer size={index < inputs.length - 1 ? 10 : 5} />
                </View>
              )
            })
          }
        </>
    )
}