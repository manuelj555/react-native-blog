import React from 'react'
import { View } from 'react-native'

export function ScreenLayout ({ screen, children }) {
  return (
    <View className="flex-1 items-stretch p-1 bg-gray-50">
      {screen}
      {children}
    </View>
  )
}