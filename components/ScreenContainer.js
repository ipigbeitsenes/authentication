import sizes from "../config/sizes";
import React from 'react'
import { StyleSheet, View } from 'react-native'

const ScreenContainer = ({ 
    children,
    style,
    ...props}) => {
    return (
        <View style={styles.container}
        {...props}
        >{children}</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: sizes.statusBarHeight
    }
})

export default ScreenContainer;