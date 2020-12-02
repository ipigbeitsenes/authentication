import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Animated, StyleSheet, View, Text } from 'react-native'
import Button from './Button'
import Spacer from './Spacer'
import colors from '../config/colors'

// COMPONENT CODE
/////////////////////////////////////////////////////////////////////

export default function Alert(props) {
  // if (!props.status) return null

  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animation, {
      toValue: props.status ? 1 : 0,
      duration: 500,
      useNativeDriver: true
    }).start()
  }, [props.status])

  let typologyContainerStyle = styles.containerSuccess
  if (props.typology === 'danger') typologyContainerStyle = styles.containerDanger

  return (
    <>
      <Animated.View style={[styles.container, typologyContainerStyle, {
        transform: [{
          scale: animation.interpolate({
            inputRange: [0, 1], // i valori di Animated.Value, gestiti all'interno di useEffect
            outputRange: [0, 1] // il valore di translate basato sui valori di Animated.Value
          })
        }],
      }]}>
        <Text style={styles.message}>{props.message}</Text>
        {props.onClose && ( // stampo il bottone solo se la componente riceve la props onClose
          <Button title="X" color={colors.black} onPress={props.onClose} />
        )}
      </Animated.View>
      <Spacer size={10} />
    </>
  )
}

// COMPONENT STYLE
/////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15
  },
  containerSuccess: {
    backgroundColor: 'green'
  },
  containerDanger: {
    backgroundColor: 'red'
  },
  message: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16
  }
})

// COMPONENT PROPS
/////////////////////////////////////////////////////////////////////

Alert.propTypes = {
  status: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  typology: PropTypes.oneOf(['success', 'danger']),
  onClose: PropTypes.func
}

Alert.defaultProps = {
  typology: 'success'
}