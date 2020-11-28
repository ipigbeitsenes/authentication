import React, { useRef, useEffect, useState, forwardRef } from 'react'
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native'

/**
 * ref non può essere passata come prop
 * quindi dobbiamo utilizzare `forwardRef`, che la espone
 * come secondo parametro del nostro componente
 * https://it.reactjs.org/docs/forwarding-refs.html
*/
const Input = forwardRef(({
  containerStyle,
  labelStyle,
  inputStyle,
  isPassword,
  label = 'Placeholder',
  ...props // props native di TextInput
}, ref) => {
  const [text, setText] = useState('')
  const [focused, setFocused] = useState(false)
  /**
   * creiamo un Animated.Value con valore iniziale 0 che ci
   * servirà per eseguire l'animazione tramite Animated.timing
   * e per utilizzare il suo valore dentro il transform delle
   * Animated.View che abbiamo integrato
   */
  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animation, {
      // toValue: focused ? 1 : 0,
      // toValue: +focused, // stessa cosa che sopra
      toValue: +(focused || (!focused && !!text)), // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
      duration: 300,
      useNativeDriver: true // mettere `true` solamente se le proprietà che andremo ad animare sono `transform` e `opacity`
    }).start()
  }, [focused])

  return (
    <View style={[styles.container, containerStyle]}>
      <Animated.View
        style={[
          styles.labelContainer,
          // questo metodo è valido ma funziona solo su android
          // {
          //   translateY: animation.interpolate({
          //     inputRange: [0, 1],
          //     outputRange: [0, -30]
          //   })
          // },
          {
            transform: [{
              translateY: animation.interpolate({
                inputRange: [0, 1], // i valori di Animated.Value, gestiti all'interno di useEffect
                outputRange: [0, -30] // il valore di translate basato sui valori di Animated.Value
              })
            }]
          }
        ]}
      >
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      </Animated.View>
      <TextInput
        style={[
          styles.input,
          // possiamo cambiare styles anche in base a delle variabili
          // focused ? styles.inputFocused : undefined,
          // {
          //   borderBottomColor: focused ? '#0f0' : '#000'
          // },
          inputStyle
        ]}
        value={text}
        onChangeText={value => setText(value)}
        // onChangeText={setText} // stessa cosa che la riga sopra
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        secureTextEntry={isPassword}
        ref={ref}
        { ...props }
      />

      {/* TRANSFORM ORIGIN https://github.com/sueLan/react-native-anchor-point */}
      <Animated.View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#0f0',
          position: 'absolute',
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
  )
})

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  input: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#000'
  },
  inputFocused: {
    borderBottomColor: '#0f0'
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
