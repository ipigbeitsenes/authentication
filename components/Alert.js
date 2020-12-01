import { Animated, StyleSheet, Text, View } from 'react-native'
import Button from './Button'

export default function Alert(props) {

    let color = "yellow";
    if (props.typology == "danger") {
        color: "red";
    } else if (props.typology == "success") {
        color: "green"
    }

    if (props.status) {
        return (
            <View>
                <Text style={color}>{props.messagge}</Text>
                <Button title="Chiudi" onPress={props.onClose} />
            </View>
        )
    }
    return (
        <View>
            <Text>Ciao</Text>
        </View>
    )
}