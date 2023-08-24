import React from 'react'
import { Text } from 'react-native'
import { get } from 'react-hook-form'
import Animated, { BounceInRight, FadeOutRight } from 'react-native-reanimated'

export function FieldError ({ errors, name, errorAsBlock = false }) {
  const error = get(errors, name)

  if (!error) {
    return null
  }

  const { message } = error

  return (
    <Animated.View
      className={`${errorAsBlock ? 'bg-red-500 rounded px-2' : ''} py-1 my-1`}
      entering={BounceInRight}
      exiting={FadeOutRight}
    >
      <Text className={`${errorAsBlock ? 'text-white' : 'text-red-600'}`}>{message}</Text>
    </Animated.View>
  )
}