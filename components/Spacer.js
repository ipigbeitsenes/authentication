import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const Spacer = ({
  size = 0,
  horizontal,
  ...props
}) => {
  return (
    <View style={{
      width : size * sizes.unitSize,
      height : size * sizes.unitSize
    }} {...props} />
  )
}


export default Spacer
