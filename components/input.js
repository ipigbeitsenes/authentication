import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native"

const Input = () {
    const [text, setText] = useState('')
    return (
        <View>
        
            <Text>label</Text>
            <TextInput>
            value:{text}
            onChangeText={value => setText(value)}

            </TextInput>
        )
        </View>
};
const styles = StyleSheet.create ({
    container: {
        paddingTop:20

    },
    input
})

export default Input