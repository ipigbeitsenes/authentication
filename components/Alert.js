import React from 'react'
import { View, Text } from 'react-native'
import Button from './Button'

export default function Alert(props){
    return (
    <View>

    </View>
    )
}

// COMPONENT PROPS
/////////////////////////////////////////////////////////////////////

Alert.propTypes = {
    status: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    typology: PropTypes.string,
    onClose: PropTypes.func
  }
  
Alert.defaultProps = {
    typology: 'succes'
  }