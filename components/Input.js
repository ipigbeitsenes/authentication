import React, { useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({
  containerStyle,
  labelStyle,
  inputStyle
}) => {
  const [text, setText] = useState('')
  const [focused, setFocused] = useState(false)
  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animation, {
      toValue: +(focused || (!focuse && !!text)),
      duration: 300,
      useNativeDriver: true
    }).start()
  }, [focused])

  return (
    <View style={[styles.container, containerStyle]}>
    <Animated.View
      style={(
        styles.labelContainer,
        {
          transform: [{
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -30]
            })
          }]
        }
      )}
      >
        <Text style={[styles.label, labelStyle]}>Label</Text>
      </Animated.View>
      <TextInput
        style={[
          styles.input, 
          {
          borderBottomColor: focused ? '#0f0' : '#000'
          }, 
          inputStyle
        ]}
        value={text}
        onChangeText={value => setText(value)}
        onFocus={() => setFocused (true)}
        onBlur={() => setFocused (false)}
        // onChangeText={setText}
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
  labelContainer: {
    position: 'absolute',
    top: 30
  },
  label: {
    fontSize: 20,
    lineHeight: 20
  }
})

export default Input
