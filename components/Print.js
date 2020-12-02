import React from 'react'
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