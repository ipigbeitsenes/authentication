import React from 'react'
import { Text, View } from 'react-native'
import ScreenContainer from '../components/ScreenContainer'

export default function Title (props){

    return (
        <View>
            <Text>{props.label}</Text>
        </View>
    )
}
