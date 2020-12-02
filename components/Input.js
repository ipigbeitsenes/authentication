import React, { useRef, useState, useEffect } from 'react'
import {
    Animated,
    Text,
    TextInput,
    View,
    StyleSheet,
} from 'react-native'


const Input = () => {
    const [text, setText] = useState('')
    const [focused, setFocused] = useState(false)
    const animation = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(animation, {
            toValue: +focused,
            duration: 500,
            useNativeDriver: true
        }).start()
    }, [focused])

    return (
        <View style={styles.container, containerStyle}>
            <Animated.View
                style={[
                    styles.labelContainer,
                    {
                        transform: [{
                            translateY: animation.interpolate({
                                iputRange: [0, 1],
                                outputRange: [0, -30]
                            })
                        }]
                    }
                ]}

            >
                <Text style={styles.label}>Label</Text>
            </Animated.View>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={value => setText(value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />


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
        fontSize: 20,
        lineHeight: 20
    },
})
