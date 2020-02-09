import React from 'react'
import { Repository } from '../../models/Repository'
import { FlatList, Text } from 'react-native'

interface RepositoryList {
  repositories: Repository[]
}

const RepositoryList: React.FC<RepositoryList> = props => (
  <FlatList
    data={props.repositories}
    keyExtractor={item => item.name}
    renderItem={({ item }) => <Text>{item.name}</Text>}
  />
)

export default RepositoryList
