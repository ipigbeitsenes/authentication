import React from 'react';
import sizes from './config/sizes.js';
import { View } from 'react-native';

const Spacer = ({size = 0}) => {
    return (
        <View style = {{
            width: size*sizes.unitSize,
            heigth: size*sizes.unitSize
        }} />
    )
}

export default Spacer;