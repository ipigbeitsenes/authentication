import React from 'react'
import {StyleSheet, View, Text } from 'react-native'
import DeprecatedViewPropTypes from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes'


export default function  Alert(props){
    let alertStyle = styles.alertsuccess
    if (props.typology == 'danger') alertStyle = styles.alert
    return (
        <View>
            <Text>prov</Text>
        </View>
    )
}
//////////////COMPONENT STYLE////////////////

/////////////COMPONEN PRPS//////////////////

Alert.propType ={
   status: propTypes.bool.isRequired,
   message:propTypes.string.isrequired 
}