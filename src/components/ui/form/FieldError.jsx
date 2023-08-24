import React from 'react'
import { Text } from 'react-native'
import { get } from 'react-hook-form'
import Animated, { FadeOutRight, FlipInXUp } from 'react-native-reanimated'

export function FieldError ({ errors, name }) {
  const error = get(errors, name)

  if (!error) {
    return null
  }

  const { message } = error

  return (
    <Animated.View
      className="px-2 py-1 bg-red-500 rounded my-1"
      entering={FlipInXUp}
      exiting={FadeOutRight}
    >
      <Text className="text-white">{message}</Text>
    </Animated.View>
  )
}