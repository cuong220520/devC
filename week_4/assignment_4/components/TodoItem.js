import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'

import { globalStyles } from '../styles/global'

export default function TodoItem({ item, index, onToggleTodo, onDeleteTodo }) {
  const statusStyle = {
    backgroundColor: item.status === 'Done' ? 'blue' : 'green',
  }

  const pressHandler = (id) => {
    onToggleTodo(id)
  }

  const longPressHandler = (id, body) => {
    const promp = body

    Alert.alert(
      'Delete your todo?',
      promp,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => onDeleteTodo(id),
        },
      ],
      { cancelable: true }
    )
  }

  return (
    <TouchableOpacity
      style={[globalStyles.todoItem, statusStyle]}
      onPress={() => pressHandler(item.id)}
      onLongPress={() => longPressHandler(item.id, item.body)}
    >
      <Text style={globalStyles.todoText}>
        {index + 1}: {item.body}
      </Text>
    </TouchableOpacity>
  )
}
