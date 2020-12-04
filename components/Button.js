import React from 'react'
import * as Device from 'expo-device'
import { Button } from 'react-native'
import colors from '../config/colors'

export default function ButtonCustom({ children, ...props }) {
  return (
    <Button
      color={Device.osName === 'iOS' ? colors.primaryLight : colors.primary}
      {...props}
    >
      {children}
    </Button>
  )
}