// import { DefaultTheme } from 'react-native-paper'
import colors from './colors'

const { primaries, grays, secondaries, auxiliaries } = colors

const defaultFont = {
  fonts: {
    regular: {
      fontFamily: 'SourceSansPro-Regular'
    },
    medium: {
      fontFamily: 'SourceSansPro-Bold'
    },
    light: {
      fontFamily: 'SourceSansPro-Light'
    },
    thin: {
      fontFamily: 'SourceSansPro-ExtraLight'
    }
  }
}

export const theme = {
  // ...DefaultTheme,
  ...defaultFont,
  colors: {
    // ...DefaultTheme.colors,
    primary: primaries[0],
    accent: primaries[1],
    text: grays[4],
    notification: auxiliaries[13]
  }
}

export const customTheme = {
  ...defaultFont,
  colors: {
    primary: primaries[1],
    accent: primaries[0],
    notification: secondaries[1]
  }
}

export const buttons = { roundness: 10 }
export const inputs = { roundness: 10 }
