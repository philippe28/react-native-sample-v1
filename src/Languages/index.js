import * as languages from './languages'
import initialState from '../States/initial.state'

export function getLanguage() {
  try {
    return languages[initialState.language]
  } catch (error) {
    console.log(error)
  }
}

export const language = getLanguage()
