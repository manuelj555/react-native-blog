import React, { Suspense } from 'react'
import { router, Stack } from 'expo-router'
import { ListOfPosts, ListOfPostsLoading } from '../components/post/ListOfPosts'
import { ScreenLayout } from '../components/ui/ScreenLayout'
import { FormInput } from '../components/ui/form/FormInput'
import { useForm } from 'react-hook-form'
import { KeyboardAvoidingView, View } from 'react-native'
import { Title } from '../components/ui/Title'
import { Button } from '../components/ui/Button'
import { useAuth } from '../hooks/auth'
import { da } from 'date-fns/locale'

export default function LoginScreen () {
  const { control, handleSubmit } = useForm()
  const { signIn } = useAuth()

  function handleLogin (data) {
    signIn(data)
    router.push('/')
  }

  return (
    <ScreenLayout
      screen={<Stack.Screen options={{ title: 'My Blog Page - Login' }}/>}
    >
      <KeyboardAvoidingView className="justify-center p-12" style={{ gap: 12 }}>
        <View className="items-center mb-4">
          <Title title="Inciar Sesión"/>
        </View>
        <FormInput
          title="Nombre de Usuario"
          name="username"
          control={control}
        />
        <FormInput
          title="Contraseña"
          name="password"
          control={control}
          secureTextEntry
        />
        <View className="flex flex-row justify-between gap-2 mt-2">
          <Button className="flex-grow" onPress={handleSubmit(handleLogin)}>Iniciar Sesión</Button>
          <Button className="flex-grow">Crear Cuenta</Button>
        </View>
      </KeyboardAvoidingView>
    </ScreenLayout>
  )
}
