

import React, { createRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthProvider from './contexts/AuthContext'
import AppNavigator from './navigators/AppNavigator'
import { rootNavigation } from './Utility/navigation.js'
import Providers from "./contexts/Providers.js"
import Screens from "./screens/Screens.js"
//export const rootNavigation = createRef()

const statusBarHeight = Constants.statusBarHeight

export default function App() {
  return (
    <Providers>
      <Screens/>
    </Providers>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
