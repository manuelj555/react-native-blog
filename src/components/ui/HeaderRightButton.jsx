import React from 'react'
import { Link } from 'expo-router'
import { Pressable, Text } from 'react-native'

export function HeaderRightButton ({ href, onPress, title }) {

  const button = (
    <Pressable className="py-1 px-2 rounded bg-indigo-700 active:bg-indigo-800" onPress={onPress}>
      <Text className="text-gray-100 text-xs">{title}</Text>
    </Pressable>
  )

  if (href) {
    return <Link href={href} asChild>{button}</Link>
  }

  return button
}