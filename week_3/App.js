import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'

import OptionButton from './components/OptionButton'
import ChoiceCard from './components/ChoiceCard'

export default function App() {
  const [gamePrompt, setGamePrompt] = useState('Choose your weapon!')
  const [userChoice, setUserChoice] = useState({})
  const [computerChoice, setComputerChoice] = useState({})

  const CHOICES = [
    {
      name: 'rock',
      uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png',
    },
    {
      name: 'paper',
      uri:
        'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png',
    },
    {
      name: 'scissors',
      uri:
        'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png',
    },
  ]

  const pressHandler = (playerChoice) => {
    const [result, computerChoice] = getRoundOutcome(playerChoice)

    const newUserChoice = CHOICES.find((choice) => choice.name === playerChoice)
    const newComputerChoice = CHOICES.find(
      (choice) => choice.name === computerChoice
    )

    setGamePrompt(result)
    setUserChoice(newUserChoice)
    setComputerChoice(newComputerChoice)
  }

  const getRoundOutcome = (userChoice) => {
    console.log(randomComputerChoice())
    const computerChoice = randomComputerChoice().name
    let result

    if (userChoice === 'rock') {
      result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!'
    }
    if (userChoice === 'paper') {
      result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!'
    }
    if (userChoice === 'scissors') {
      result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!'
    }

    if (userChoice === computerChoice) result = 'Tie game!'
    return [result, computerChoice]
  }

  const randomComputerChoice = () =>
    CHOICES[Math.floor(Math.random() * CHOICES.length)]

  const getResultColor = () => {
    if (gamePrompt === 'Victory!') return 'green'
    if (gamePrompt === 'Defeat!') return 'red'
    return null
  }

  return (
    <View style={styles.container}>
      <Text>Rock, paper, sccisors game</Text>
      <Text style={{ fontSize: 35, color: getResultColor() }}>
        {gamePrompt}
      </Text>

      <View style={styles.choicesContainer}>
        <ChoiceCard player='Player' choice={userChoice} />
        <Text style={{ color: '#250902' }}>vs</Text>
        <ChoiceCard player='Computer' choice={computerChoice} />
      </View>

      <FlatList
        keyExtractor={(item) => item.name}
        data={CHOICES}
        renderItem={({ item }) => (
          <OptionButton
            name={item.name}
            onPress={() => pressHandler(item.name)}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: '#e9ebee',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 5,
    shadowRadius: 5,
    paddingBottom: 20,
    borderColor: 'grey',
    shadowOpacity: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },
})
