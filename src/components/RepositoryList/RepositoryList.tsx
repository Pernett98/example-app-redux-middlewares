import React from 'react'
import { Repository } from '../../models/Repository'
import { FlatList } from 'react-native'
import RepositoryItem from '../RepositoryItem'

interface RepositoryList {
  repositories: Repository[]
}

const RepositoryList: React.FC<RepositoryList> = props => (
  <FlatList
    data={props.repositories}
    keyExtractor={item => item.name}
    renderItem={({ item }) => <RepositoryItem item={item} />}
  />
)

export default RepositoryList
