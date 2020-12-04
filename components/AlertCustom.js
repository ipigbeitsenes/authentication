import React from 'react'
import {StyleSheet, View, Text } from 'react-native'
import Spacer from './Spacer'
import Button from './button'
import colors from '../config/colors'


export default function AlertCustom(props) {

    return (
        <View>
            <Text style={{ color: color }}>{message}</Text>
            <Button title='CLOSE'/>
        </View>
    )

}

const styles= StyleSheet.create({
    container:{
        backgroundColor: 'red',
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center,'
    },
    message:{
        color: colors.white,
        fontSize: 16,
    }
})

AlertCustom.propTypes={
    status: PropTypes.bool.isRequired,
    message:  PropTypes.string.isRequired,
    typology:  PropTypes.string,
    onClose: PropTypes.func
}

AlertCustom.defaultProps={
    typology: succues
}
