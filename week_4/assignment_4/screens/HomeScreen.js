import React, { useState } from 'react'
import { View, FlatList, TextInput, TouchableOpacity, Text } from 'react-native'
import TodoItem from '../components/TodoItem'

import { globalStyles } from '../styles/global'
import { todos } from '../utils/todos'

export default function HomeScreen({ navigation }) {
  const [todoList, setTodoList] = useState(todos)
  const [todoBody, setTodoBody] = useState('')

  const onSubmitTodo = () => {
    setTodoList((prevTodoList) => [
      { body: todoBody, status: 'Active', id: todoList.length + 1 },
      ...prevTodoList,
    ])
    setTodoBody('')
  }

  const onToggleTodo = (id) => {
    const todo = todoList.find((todo) => todo.id === id)
    todo.status = todo.status === 'Done' ? 'Active' : 'Done'
    const foundIndex = todoList.findIndex((todo) => todo.id === id)
    todoList[foundIndex] = todo
    const newTodoList = [...todoList]

    setTodoList(newTodoList)

    setTimeout(() => {
      navigation.navigate('Details', { updatedTodo: todo })
    }, 1000)
  }

  const onDeleteTodo = (id) => {
    setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id))
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Todo App</Text>

      <View style={globalStyles.inputContainer}>
        <TextInput
          value={todoBody}
          style={globalStyles.todoInput}
          onChangeText={(text) => setTodoBody(text)}
        />
        <TouchableOpacity style={globalStyles.button} onPress={onSubmitTodo}>
          <Text style={globalStyles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todoList}
        renderItem={({ item, index }) => (
          <TodoItem
            item={item}
            index={index}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
          />
        )}
      />
    </View>
  )
}
