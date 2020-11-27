import React from 'react'


const ScreenContainer = ({children, style, ...props}) => {
  return (
    <View style = {[styles.container, style]} {...props} >{children} </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: sizes.StatusBarHeight
  }
})


export default ScreenContainer
