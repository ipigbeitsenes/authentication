import React from 'react'
import { StyleSheet, View } from 'react-native'
import size from '../config/sizes'

const ScreenContainer = ({ children,
    style,
    ...props }) => {

    return (
        <View style={[styles.container, style]} 
        {...props} 
        >{children}</View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: size.statusBarHeight
    }
})