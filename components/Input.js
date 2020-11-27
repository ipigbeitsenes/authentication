import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Animated } from 'react-native'

const Input = ({ containerStyle, labelStyle, inputStyle }) => {
    const [text, setText] = useState('')
    const [focused, setFocused] = useState(false)
    const animation = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(animation, {
            toValue: +(focused || (!focused && text)),
            duration: 300,
            useNativeDriver: true
        }).start()
    }, [focused])

    return (
        <View style={[styles.container, containerStyle]}>
            <Animated.View
                style={[
                    styles.labelContainer,
                    {
                        transform: [{
                            translateY: animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -30]
                            })
                        }]
                    }
                ]}
            >
                <Text style={[styles.label, labelStyle]}>Label</Text>
            </Animated.View>
            <TextInput
                style={[styles.input, inputStyle]}
                value={text}
                onChangeText={value => setText(value)}
                // onChange={setText(value)}

                oonFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />

            <Animated.View
                style={{
                    width: '100%',
                    height: 2,
                    backgroundColor: '#0f0',
                    position: "absolute",
                    bottom: 0,
                    transform: [{
                        scaleX: animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1],
                        })
                    }]
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,

    },
    input: {
        height: 40,
        borderBottomWidth: 2,
        // borderTopWidth: 2,
        // borderBottomColor: '#000'
    },
    labelContainer: {
        position: 'absolute',
        // top: 0 consider the padding, so in web it would be top: 20
        top: 0
    },
    label: {
        fontSize: 20,
        lineHeight: 20
    }
})

export default Input;