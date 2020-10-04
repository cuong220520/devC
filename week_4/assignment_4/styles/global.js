import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 30,
  },
  titleText: {
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: '95%',
    minHeight: 20,
    color: 'white',
    borderRadius: 5,
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  todoInput: {
    width: '95%',
    minHeight: 30,
    borderWidth: 1,
    marginTop: 12,
    marginBottom: '5%',
    borderColor: 'grey',
    padding: 8,
    borderRadius: 10,
  },
  inputContainer: {
    width: '100%',
    marginBottom: '10%',
  },
  button: {
    height: 50,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  detailsTodo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
