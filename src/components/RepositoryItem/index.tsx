import React from 'react'
import { View, Text } from 'react-native'

import { Repository } from '../../models/Repository'
import Styles from './styles'

type RepositoryItemProps = {
  item: Repository
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ item }) => (
  <View style={Styles.container}>
    <Text style={Styles.title}>Name: {item.name}</Text>
    <Text>Language: {item.language}</Text>
    <Text>Starts: {item.starts}</Text>
  </View>
)

export default RepositoryItem
