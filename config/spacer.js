import React from 'react'
import {View, Wiew} from 'react-native'
import sizes from './sizes.js'

const Spacer =({
    size = 0,
    horizontal,
    ...props
}) => {
    return (
        <View style={{
            width: horizontal ? size * sizes.unitSize : 0,
            height: horizontal ? 0: size * sizes.unitsize

        }} { ...props } />

        
    )
}

export default spacer