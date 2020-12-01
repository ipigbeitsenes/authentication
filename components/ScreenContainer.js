import React from 'react'
import { StyleSheet, View } from 'react-native'
import sizes from '../config/sizes'

<<<<<<< HEAD
=======
// questo componente è l'equivalente di SafeAreaView
>>>>>>> 98bad19c713168f54cdb042813f7295cbea335f6
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
<<<<<<< HEAD
    paddingTop: sizes.statusBarHeight
  }
})

export default ScreenContainer
=======
    paddingTop: sizes.statusBarHeight,
    paddingBottom: 30,
    paddingHorizontal: 30
  }
})

export default ScreenContainer
>>>>>>> 98bad19c713168f54cdb042813f7295cbea335f6
