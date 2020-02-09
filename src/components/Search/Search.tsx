import React from 'react'
import { TextInput } from 'react-native'

interface SearchProps {
  text?: string
  placeHolder?: string
  onChangeText: (text: string) => void
}

export default (props: SearchProps) => (
  <TextInput
    value={props.text}
    placeholder={props.placeHolder}
    onChangeText={props.onChangeText}
  />
)
