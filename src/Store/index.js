import React from 'react'
// import useGlobalHook from './useGlobalHook'
import globalHook from 'use-global-hook'
import * as actions from '../Actions'
import initialState from '../States/initial.state'

const useGlobal = globalHook(React, initialState, actions)

export default useGlobal
