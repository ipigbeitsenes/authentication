import React, { useState } from 'react'
import {
    Text,
    TextInput,
    View,
    StyleSheet,
} from 'react-native'


const Input = () => {
    const [text, setText] = useState('')
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Label</Text>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={value => setText(value)} />


        </View>
    )
}
export default Input

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    input: {
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        borderTopWidth: 2,
        borderTopColor: '#000'
    },
    label: {
        position: 'absolute',
        top: 0,
        fontSize: 20,
        lineHeight: 20
    },
})
