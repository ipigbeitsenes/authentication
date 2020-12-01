import React from 'react';
import Spacer from './Spacer.js';
import Button from './Button.js';
import { Text, View } from 'react-native';
export default function Alert(props) {
    let color = "yellow";
    if (props.typology == "danger") {
        color = "red";
    } else if (props.typology == "success") {
        color = "green";
    }
    if (props.status) {
        return  <View>
                    <Text style={{ color: color }}>{props.message}</Text>
                    <Button onPress={props.onClose} />              
                    </View>
    } else {
        return <Spacer size={20} /> 
    }
}