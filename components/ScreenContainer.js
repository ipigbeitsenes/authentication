import React from 'react'
import sizes from '../config/sizes'
import { StyleSheet, View } from 'react-native'

const ScreenContainer = ({ 
    children, 
    style, 
    ...props 
}) => {
    return (
        <View 
            style = {[styles.container, style]} 
            { ...props}
        >{children}</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: sizes.statusBarHeight
    }
})

export default ScreenContainer