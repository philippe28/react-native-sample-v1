import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'

import Login from '../Screens/login.screen'


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  }
})

const getActiveRouteName = navigationState => {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

const AppContainer = createAppContainer(AppNavigator)


export default () => (
  <AppContainer
    onNavigationStateChange={(prevState, currentState) => {
      const currentRouteName = getActiveRouteName(currentState)
      const previousRouteName = getActiveRouteName(prevState)

      if (Platform.OS === 'ios') {
        // PushNotificationIOS.removeAllDeliveredNotifications()
        // PushNotificationIOS.setApplicationIconBadgeNumber(0)
      } else {
        // PushNotification.cancelAllLocalNotifications()
      }

      if (previousRouteName !== currentRouteName) {
        // the line below uses the @react-native-firebase/analytics tracker
        // change the tracker here to use other Mobile analytics SDK.
        // analytics().setCurrentScreen(currentRouteName, currentRouteName)
      }
    }}
  />
)

// export default createAppContainer(AppNavigator)
