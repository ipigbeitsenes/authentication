import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = () => {
    const [text, setText] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.label}></Text>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={value => setText(value)}
            // onChange={setText(value)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    },
    input: {
        height: 40,
        borderBottomWidth: 2,
        borderTopWidth: 2,
    },
    label: {
        position: 'absolute',
        // top: 0 consider the padding, so in web it would be top: 20
        top: 0
    },
})

export default Input;