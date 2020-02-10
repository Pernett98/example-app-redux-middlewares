import React from 'react'
import { ActivityIndicator } from 'react-native'
export const Loading: React.FC<{
  loading?: boolean
}> = ({ loading }) => (loading ? <ActivityIndicator /> : null)
