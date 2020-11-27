import React from 'react';
import sizes from '../config/sizes'
import { View } from 'react-native'

const Spacer = ({
    size = 0,
    horizontal,
}) => {
    return (
        <View style={{
            width: horizontal ? size * sizes.unitSize : 0,
            height: horizontal ? 0 : size * sizes.unitSize
        }} {...props}
        />
    );
};

export default Spacer;