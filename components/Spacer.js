import React from 'react'
import sizes from '../config/sizes'
import { View } from 'react-native'

const Spacer = ({ 
    size = 0,
    ...props
    }) => {
    return (
        <View style = {{

            width: size * sizes.unitSize,
            height: size * sizes.unitSize

        }} {...props}/>
    )
}

export default Spacer