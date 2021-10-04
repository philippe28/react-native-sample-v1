/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'
import { StatusBar, Text, AppState, Linking } from 'react-native'


import Navigator from './Navigator'
import useGlobal from './Store'

// Icon.loadFont()

const App = () => {
  const [, actions] = useGlobal(null, actions)
  // const { navigate } = useNavigation()
  const appState = useRef(AppState.currentState)

  useEffect(() => {
    try {
      Orientation.lockToPortrait()      
      return () => {
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  // TODO: Metodo para limitar a acessibilidade para nao desconfigurar o layout
  Text.defaultProps = {}
  Text.defaultProps.maxFontSizeMultiplier = 1

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Navigator />
    </>
  )
}

export default App
