import React from 'react'
import { ActivityIndicator, Pressable, Text } from 'react-native'
import { Link } from 'expo-router'
import { he, hr } from 'date-fns/locale'

const variantStyles = {
  primary: 'bg-indigo-800 active:bg-indigo-900',
  secondary: 'bg-indigo-600 active:bg-indigo-700',
}

export function Button ({ children, onPress, href, variant = 'primary', isLoading = false, style }) {

  const button = (
    <Pressable
      disabled={isLoading}
      onPress={onPress}
      className={`py-3 px-4 rounded items-center flex-row justify-center
       ${variantStyles[variant]} 
       ${isLoading ? 'bg-opacity-80' : ''}
     `}
      style={[{ gap: 10 }, style]}
    >
      {isLoading && <ActivityIndicator size="small"/>}
      <Text className="text-white font-semibold">{children}</Text>
    </Pressable>
  )

  if (href) {
    return <Link href={href} asChild style={{ gap: 10 }}>{button}</Link>
  }

  return button
}