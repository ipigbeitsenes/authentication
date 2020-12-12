import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import Input from './Input'
import Spacer from './Spacer'

export default function Form(props) {
  return (
    <>
      {
        props.inputs.map(({ label, name, ref, autoCapitalize, secureTextEntry }, index) => {
          return (
            <View key={index}>
              <Input
                ref={ref}
                label={label}
                blurOnSubmit={!(index < props.inputs.length - 1)}
                onTextChange={(text) => props.updateInputValue(name, text)}
                onSubmitEditing={() => {
                  const nextInput = props.inputs[index + 1]

                  if (nextInput) {
                    nextInput.ref.current.focus()
                  }
                }}
                autoCapitalize={autoCapitalize}
                secureTextEntry={secureTextEntry}
              />
              <Spacer size={index < props.inputs.length - 1 ? 10 : 5} />
            </View>
          )
        })
      }
    </>
  )
}

Form.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    name: PropTypes.string,
    ref: PropTypes.object,
    autoCapitalize: PropTypes.string,
    secureTextEntry: PropTypes.bool
  })).isRequired,
  updateInputValue: PropTypes.func.isRequired
}
