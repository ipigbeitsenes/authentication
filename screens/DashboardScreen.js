import React from 'react'
import { Text, View } from 'react-native'
import ScreenContainer from '../components/ScreenContainer'
import Title from '../components/Title'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import { layoutStyles } from '../styles/Layout'

export default function DashboardScreen(props) {
    return (
        <View style={layoutStyles.container}>
            <Spacer size={10} />
            <Title label="Schermata per utente loggato" centerText />
            <Spacer size={20} />
        </View>
    )
}
