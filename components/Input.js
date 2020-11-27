import React, { useRef, useState, useEffect } from 'react'
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({
    containerStyle,
    labelStyle,
    inputStyle
}) => {
    const [text, setText] = useState('')
    const animation = useRef(new Animated.Value(0)).current
    const [focused, setFocused] = useState(false)


    useEffect(() => {
        Animated.timing(animation, {
            // toValue: focused? 1 :0,
            toValue: +(focused || (!focused && !!text)),
            duration: 500,
            useNativeDriver: true
        }).start
    }, [focused])
    return (
        <View style={[styles.container, containerStyle]}>
            <Animated.View
                style={styles.labelContainer,
                {
                    transform: [{
                        translateY: animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -30],
                        })
                    }]
                }
                }


            >
                <Text style={[styles.label, labelStyle]}>Label</Text>
            </Animated.View>
            <TextInput
                style={[styles.input, inputStyle]}
                value={text}
                onChangeText={value => setText(value)}
                onFocus={() => { setFocused(true) }}
                onBlur={() => { setFocused(false) }}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    },
    input: {
        height: 40,
        borderBottomWidth: 2,
        // borderTopWidth: 2,
        borderBottomColor: '#000',
        // borderTopColor: '#000',
    },
    labelContainer: {
        position: 'absolute',
        top: 30,


    },
    label: {
        fontSize: 20,
        lineHeight: 20
    }
})

export default Input