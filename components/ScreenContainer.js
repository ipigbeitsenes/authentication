import React from 'react';
import sizes from '../config/sizes';
import {View, StyleSheet} from 'react-native';

const ScreenContainer = ({children, style}) => {
    return(
        <View style ={[{}, style]}>{children}</View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddindTop: sizes.statusBarHeigth
    }
})

export default ScreenContainer;