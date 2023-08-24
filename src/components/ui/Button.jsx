import React from 'react'
import { Pressable, Text } from 'react-native'

export function Button ({ children, onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      className="py-3 px-4 bg-indigo-800 rounded items-center active:bg-indigo-900"
      style={style}
    >
      <Text className="text-white font-semibold">{children}</Text>
    </Pressable>
  )
}