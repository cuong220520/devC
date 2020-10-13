import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  articlesContainer: {
    alignItems: 'center',
    paddingTop: 30,
  },
  header: {
    height: 30,
    width: '100%',
    backgroundColor: 'pink',
  },
  row: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    color: 'grey',
  },
})
