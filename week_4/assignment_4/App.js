import React from 'react'
import { StyleSheet } from 'react-native'
import Navigator from './routes/HomeTabs'

export default function App() {
  return <Navigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})