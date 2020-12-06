import React, { useRef, useState, useEffect } from 'react'
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../config/colors'

const Input = ({
    containerStyle,
    labelStyle,
    inputStyle
}) => {
    const [text, setText] = useState('')
    const [focus, setFocus] = useState(false)
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animation, {
            toValue: +(focus || (!focus && !!text)),
            duration: 500,
            useNativeDriver: true
        }).start
    }, [focus])

    return (
        <View style={[styles.container, containerStyle]}>
            <Animated.View
                style={[styles.labelContainer,
                {
                    transform: [{
                        translateY: animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -30]
                        })
                    }]
                }
                ]} >

                <Text style={[styles.label, labelStyle]}>Label</Text>
            </Animated.View>
            <TextInput
                style={[styles.input, inputStyle, 
                {
                    borderBottomColor: focus ? '#0f0' : '#000'
                }, 
                inputStyle
                ]}
                value={text}
                onChangeText={value => setText(value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />

            <Animated.View
                style={{
                    backgroundColor: '#0f0', 
                    position: 'absolute',
                    bottom: 0,
                    width: '100%', 
                    transform: [{
                        scaleX: animation.interpolate({
                            inputRnge: [0, 1],
                            outputRange: [0, 1],

                        })
                    }]
                }}
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
        borderBottomColor: '#000',
    },
    label: {
        position: 'absolute',
        top: 30,
        fontSize: 20,
        lineHeight: 20
    },
    labelContainer: {
        position: 'absolute',
        top: 30
    }
})

export default Input
