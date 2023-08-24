import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { formatString } from '../../utils/date'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated'

export function Post ({ post }) {
  const { title, content, created_at, loading = false } = post

  if (loading) {
    return <PostLoading/>
  }

  return (
    <View className="py-2 border-b border-b-blue-400">
      <Text className="text-lg font-medium mb-2">
        {title}
      </Text>
      <Text>{content}</Text>
      <Text>{formatString(created_at)}</Text>
    </View>
  )
}

export function PostLoading () {
  const opacity = useSharedValue(1)

  useEffect(() => {
    const time = Math.round((Math.random() * 200) + 500)
    opacity.value = withRepeat(withTiming(0.6, {
      duration: time
    }), null, true)
  }, [opacity])

  const styles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    }
  }, [opacity])

  return (
    <Animated.View className="py-2 border-b border-b-blue-400 w-full gap-2" style={styles}>
      <Animated.View className="bg-slate-400 py-4 rounded" style={styles}></Animated.View>
      <Animated.View className="bg-slate-400 py-12 rounded" style={styles}></Animated.View>
    </Animated.View>
  )
}