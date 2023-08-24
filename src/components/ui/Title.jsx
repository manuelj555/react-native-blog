import React from 'react'
import { Text } from 'react-native'

export function Title ({ title }) {
  return (
    <Text className="text-3xl my-2">
      {title}
    </Text>
  )
}