import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'

import { globalStyles } from '../styles/global'
import { key } from '../config/config'

import Article from './Article'

export default function News() {
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  const filterUniqueArticles = (arr) => {
    const cleaned = []

    arr.forEach((item) => {
      let unique = true

      cleaned.forEach((itemCleaned) => {
        const isEqual = JSON.stringify(item) === JSON.stringify(itemCleaned)

        if (isEqual) unique = false
      })

      if (unique) cleaned.push(item)
    })

    return cleaned
  }

  const getNews = async () => {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${key.country}&apiKey=${key.apiKey}`
    )

    const jsonData = await res.json()

    const newArticlesList = filterUniqueArticles(
      articles.concat(jsonData.articles)
    )

    setArticles(newArticlesList)

    setPageNumber(pageNumber + 1)

    setLoading(false)
  }

  useEffect(() => {
    getNews()
  }, [])

  return loading ? (
    <View style={globalStyles.container}>
      <ActivityIndicator size='large' loading={loading} color='#333' />
    </View>
  ) : (
    <View style={globalStyles.articlesContainer}>
      <View style={globalStyles.row}>
        <Text style={globalStyles.label}>Articles Count: </Text>
        <Text style={globalStyles.info}>{articles.length}</Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.title}
        data={articles}
        renderItem={({ item }) => <Article item={item} />}
        onEndReached={getNews}
        onEndReachedThreshold={1}
      />
    </View>
  )
}
