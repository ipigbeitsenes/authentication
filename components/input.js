import React, {useState} from 'react'
import {Text ,View,TextInput, StyleSheet,} from 'react-native'


const Input = () => {
  const [text, setText] = useState('');
  return (
    <View style = {styles.container}>
      <Text style= {styles.label}> Label </Text>
      <TextInput
        style={styles.input}
        value= {text}
        onChangeText={value => setText(value)}
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
    borderBottomColor: 'black'
  },
  label: {
    position: 'absolute',
    top: 0,
    color: 'red',
    fontSize: 20,
    lineHeight: 20
  }
})


export default Input
