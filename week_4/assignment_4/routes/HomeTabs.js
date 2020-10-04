import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import HomeStack from './HomeStack'
import CompleteScreen from '../screens/CompleteScreen'
import ActiveScreen from '../screens/ActiveScreen'

const screens = {
  Home: {
    screen: HomeStack,
  },
  Complete: {
    screen: CompleteScreen,
  },
  Active: {
    screen: ActiveScreen,
  },
}

const HomeTabs = createBottomTabNavigator(screens, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state
      let IconComponent = Ionicons
      let iconName
      if (routeName === 'Home') {
        iconName = 'md-home'
      } else if (routeName === 'Complete') {
        iconName = 'md-done-all'
      } else if (routeName === 'Active') {
        iconName = 'ios-options'
      }

      return <IconComponent name={iconName} size={25} color={tintColor} />
    },
  }),
})

export default createAppContainer(HomeTabs)
