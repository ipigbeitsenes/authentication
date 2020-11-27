import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

const Input = () => {
    const [text, setText] = useState('')
    return(
        <View style = {styles.container}>
            <Text style={styles.label}></Text>
            <TextInput 
                style={styles.input}
                value={text}
                onChangeText={value => setText(value)}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 20
    },
    input:{
        heigth: 40,
        borderBottomWidth: 2,
        borderBottomColor: '#000'
    },
    label:{
        position: 'absolute',
        top: 0,
        fontSize: 20,
        lineHeigth: 20
    }
})

export default Input;