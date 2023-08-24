import React, { Suspense } from 'react'
import { Stack } from 'expo-router'
import { ListOfPosts, ListOfPostsLoading } from '../components/post/ListOfPosts'
import { ScreenLayout } from '../components/ui/ScreenLayout'

export default function IndexScreen () {
  return (
    <ScreenLayout
      screen={<Stack.Screen options={{ title: 'My Blog Page' }}/>}
    >
      <Suspense fallback={<ListOfPostsLoading/>}>
        <ListOfPosts/>
      </Suspense>
    </ScreenLayout>
  )
}
