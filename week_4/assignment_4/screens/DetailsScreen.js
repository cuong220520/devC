import React from 'react'
import { View, Text } from 'react-native'

import { globalStyles } from '../styles/global'

export default function DetailsScreen({ navigation }) {
  const { updatedTodo } = navigation.state.params

  console.log(updatedTodo)
  return (
    <View style={globalStyles.detailsTodo}>
      <Text style={globalStyles.titleText}>
        {updatedTodo.id}: {updatedTodo.body}
      </Text>
    </View>
  )
}
