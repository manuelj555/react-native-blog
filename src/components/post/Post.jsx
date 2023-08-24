import React from 'react'
import { Text, View } from 'react-native'
import { format } from 'date-fns'
import { formatString } from '../../utils/date'

export function Post ({ post }) {
  const { title, content, created_at } = post

  return (
    <View className="px-1 py-2 border-b m-3 border-b-blue-400">
      <Text className="text-lg font-medium mb-2">
        {title}
      </Text>
      <Text>{content}</Text>
      <Text>{formatString(created_at)}</Text>
    </View>
  )
}