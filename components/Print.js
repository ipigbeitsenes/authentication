import React from 'react'
<<<<<<< HEAD
import {View,Text, TextInput} from 'react-native'

const Print=()=>{
    return(
        <View style= {styles.container}>
            <Text style= {styles.container}>Label</Text>
            <TextInput
            style={styles.input}
            value ={text}
            onChangeText={value
            }
            />
        </View>
    )
}
const style =StyleSheet.create({
    container:{
        paddingTop:20
    },
    input:{
        height:40
    },
    label:{
        position:'absolute',
        top:0
    }
})
export default Print;
=======

const arr = (new Array(5)).fill(null)

const Print = () => {
  return (
    arr.map((value, index) => (
      <View key={index}>
        <Text>{index + 1}</Text>
      </View>
    ))
  )
}

export default Print
>>>>>>> master
