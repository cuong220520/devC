import React from 'react'
import { View, Text } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'
import moment from 'moment'

import { globalStyles } from '../styles/global'

export default function Article({ item }) {
  return (
    <Card>
      <Card.Title>{item.title}</Card.Title>
      <Card.Image source={{ uri: item.urlToImage }} />
      <View style={globalStyles.row}>
        <Text style={globalStyles.label}>Source</Text>
        <Text style={globalStyles.info}>{item.source.name}</Text>
      </View>
      <Text style={{ marginBottom: 10 }}>{item.content}</Text>
      <View style={globalStyles.row}>
        <Text style={globalStyles.label}>Published</Text>
        <Text style={globalStyles.info}>
          {moment(item.publishedAt).format('LLL')}
        </Text>
      </View>
      <Button icon={<Icon />} title='Read more' backgroundColor='#03A9F4' />
    </Card>
  )
}
