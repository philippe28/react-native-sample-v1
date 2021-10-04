import React from 'react'
import { Button } from 'react-native-paper'

import { theme, buttons } from '../../Theme/theme'
import styleButtons from '../../Styles/Buttons/buttons'
import colors from '../../Theme/colors'
import Title from '../Texts/title.component'

const styles = {
  dangerStyle: {
    backgroundColor: colors.auxiliaries[0]
  },
  border: {
    borderColor: colors.white,
    borderWidth: 1
  }
}

const PrimaryButton = ({ title, danger, border, style, ...props }) => {
  return (
    <Button
      {...props}
      mode="contained"
      theme={{ ...theme, ...buttons }}
      style={[danger && styles.dangerStyle, border && styles.border, style]}
      contentStyle={styleButtons}
    >
      <Title text={title} />
    </Button>
  )
}

export default PrimaryButton
