import React from 'react'
import { TextInput, Text } from 'react-native'
import Styles from './Styles'

interface SearchProps {
  title?: string
  text?: string
  placeHolder?: string
  onChangeText: (text: string) => void
}
const Search: React.FC<SearchProps> = props => (
  <>
    <Text style={Styles.title}>{props.title}</Text>
    <TextInput
      value={props.text}
      placeholder={props.placeHolder}
      onChangeText={props.onChangeText}
    />
  </>
)
export default Search
