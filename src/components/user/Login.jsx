import React from 'react'
import { Text, View } from 'react-native'
import { Title } from '../ui/Title'
import { FormInput } from '../ui/form/FormInput'
import { Button } from '../ui/Button'
import { KeyboardAvoiding } from '../ui/KeyboardAvoiding'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLogin } from '../../hooks/auth'
import { router } from 'expo-router'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.coerce.string().min(1, 'Por favor, indique su correo electrónico'),
  password: z.coerce.string().min(1, 'Por favor, indique su contraseña'),
})

export function Login () {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema), defaultValues: {
      email: '',
      password: '',
    }
  })
  const { login, isLoading } = useLogin()

  function handleLogin (data) {
    login(data).then(() => {
      router.push('/')
    })
  }

  return (
    <KeyboardAvoiding>
      <View className="justify-center p-12" style={{ gap: 12 }}>
        <View className="items-center mb-4">
          <Title title="Iniciar Sesión"/>
        </View>
        <FormInput
          title="Correo Electrónico"
          name="email"
          control={control}
          errorAsBlock={false}
        />
        <FormInput
          title="Contraseña"
          name="password"
          control={control}
          secureTextEntry
          errorAsBlock={false}
        />

        <Button className="flex-grow" onPress={handleSubmit(handleLogin)} isLoading={isLoading}>
          Iniciar Sesión
        </Button>

        <View className="items-center border-b border-slate-400 relative my-6">
          <Text className="border border-slate-400 py-1 px-2 rounded absolute -top-[14px] bg-gray-50">Ó</Text>
        </View>

        <Button variant="secondary" href="/register">Crear Cuenta</Button>
      </View>
    </KeyboardAvoiding>
  )
}