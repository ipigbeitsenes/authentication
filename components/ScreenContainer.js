<<<<<<< HEAD
import React from 'react';
import { View, StyleSheet } from 'react-native'
import sizes from '../config/sizes'

const ScreenContainer = ({ children, style }) => {
    return (
        <View
            style={[styles.container, style]}
        // {...props}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: sizes.statusBarHeight
    }
})


export default ScreenContainer;
=======
import React from 'react'
import { StyleSheet, View } from 'react-native'
import sizes from '../config/sizes'

// questo componente è l'equivalente di SafeAreaView
const ScreenContainer = ({
  children,
  style,
  ...props
}) => {
  return (
    <View
      style={[styles.container, style]}
      { ...props }
    >{children}</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: sizes.statusBarHeight,
    paddingBottom: 30,
    paddingHorizontal: 30
  }
})

export default ScreenContainer
>>>>>>> a80a778f58d5677646a4927de1baccdb6213557b
