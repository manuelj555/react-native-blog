import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useGetPosts } from '../../hooks/post'
import { Post } from './Post'

export function ListOfPosts ({}) {
  const { posts } = useGetPosts()

  return (
    <View>
      <ScrollView>
        {posts?.map(post => (
          <Post key={post.id} post={post}/>
        ))}
      </ScrollView>
    </View>
  )
}