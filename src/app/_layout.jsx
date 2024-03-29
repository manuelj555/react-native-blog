import React from 'react'
import { Stack } from 'expo-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from '../provider/AuthProvider'

export default function AppLayout ({}) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Stack/>
      </AuthProvider>
    </QueryClientProvider>
  )
}