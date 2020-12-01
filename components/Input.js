<<<<<<< HEAD
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
=======
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
  onTextChange = () => {},
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

  // gestione della animazione al cambio focus dell'input
  useEffect(() => {
    let toValue = 0
    if (focused) {
      toValue = 1
    }
    if (!focused && !!text) {
      toValue = 2
    }
    Animated.timing(animation, {
      // toValue: focused ? 1 : 0,
      // toValue: +focused, // stessa cosa che sopra
      toValue: toValue, // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
      duration: 300,
      useNativeDriver: false
      // useNativeDriver: true // mettere `true` solamente se le proprietà che andremo ad animare sono `transform` e `opacity`
    }).start()
  }, [focused])

  // invio del contenuto dell'input al cambio di valore di text
  useEffect(() => {
    onTextChange(text)
  }, [text])

  return (
    <View style={[styles.container, containerStyle]}>
      <Animated.View
        style={[
          styles.labelContainer,
          {
            zIndex: 1,
            transform: [{
              translateY: animation.interpolate({
                inputRange: [0, 1, 2], // i valori di Animated.Value, gestiti all'interno di useEffect
                outputRange: [0, -30, -30] // il valore di translate basato sui valori di Animated.Value
              })
            }],
          }
        ]}
      >
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      </Animated.View>
      <Animated.View
        style={[
          {
            backgroundColor: animation.interpolate({
              inputRange: [0, 1, 2], // i valori di Animated.Value, gestiti all'interno di useEffect
              outputRange: ['red', 'green', 'yellow'] // il valore di translate basato sui valori di Animated.Value
            })
          }
        ]}
      >
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
      </Animated.View>

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
              inputRange: [0, 1, 2],
              outputRange: [0, 0.5, 1],
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


/**
 * Esempio base componente definita tramite classi.
 */

// import React, { useRef, useEffect, useState, forwardRef } from 'react'
// import { Animated, StyleSheet, Text, TextInput, View } from 'react-native'

// class Input extends React.Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       text: '',
//       focused: false
//     }
//   }

//   getText() {
//     return this.state.text
//   }

//   render() {
//     return (
//       <View style={{ backgroundColor: 'red' }}>
//       <TextInput
//         value={this.state.text}
//         onChangeText={value => this.setState({ text: value })}
//         // onChangeText={setText} // stessa cosa che la riga sopra
//         onFocus={() => this.setState({ focused: true })}
//         onBlur={() => this.setState({ focused: false })}
//         { ...this.props }
//       />
//       </View>
//     )
//   }

// }

// export default Input


>>>>>>> a80a778f58d5677646a4927de1baccdb6213557b
