import React, { memo } from 'react'
import { Dimensions, Text } from 'react-native'

const { width } = Dimensions.get('window')

const Title = ({ text, style, ...props }) => {
  let size = 0
  if (width <= 360) {
    size = 12
  } else {
    size = 14
  }

  return <Text style={[{ fontSize: size }, style]}>{text}</Text>
}

export default Title
