import React from 'react'
import { Text, View } from 'react-native'
import { Title } from '../ui/Title'
import { FormInput } from '../ui/form/FormInput'
import { Button } from '../ui/Button'
import { KeyboardAvoiding } from '../ui/KeyboardAvoiding'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth, useRegistration } from '../../hooks/auth'
import { router } from 'expo-router'
import { z } from 'zod'

const registerSchema = z.object({
  email: z.coerce.string().min(1, 'Por favor, indique su correo electrónico'),
  password: z.coerce.string().min(1, 'Por favor, indique su contraseña'),
  firstName: z.coerce.string().min(1, 'Por favor, indique su Nombre'),
  lastName: z.coerce.string().min(1, 'Por favor, indique su Apellido'),
  country: z.coerce.string().min(1, 'Por favor, indique su Pais de residencia'),
})

export function Register () {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(registerSchema), defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      country: '',
    }
  })
  const { registerUser, isLoading } = useRegistration()

  function handleRegister (data) {
    console.log({ data })
    registerUser(data)
  }

  return (
    <KeyboardAvoiding>
      <View className="justify-center p-12" style={{ gap: 12 }}>
        <View className="items-center mb-4">
          <Title title="Formulario de Registro"/>
        </View>

        <FormInput title="Correo Electrónico" name="email" control={control}/>
        <FormInput title="Contraseña" name="password" control={control} secureTextEntry/>
        <FormInput title="Nombre" name="firstName" control={control}/>
        <FormInput title="Apellido" name="lastName" control={control}/>
        <FormInput title="Pais de Residencia" name="country" control={control}/>

        <View className="flex flex-row justify-between gap-2 mt-2">
          <Button className="flex-grow" onPress={handleSubmit(handleRegister)}>Registrarme</Button>
        </View>

        <View className="items-center border-b border-slate-400 relative my-6">
          <Text className="border border-slate-400 py-1 px-2 rounded absolute -top-[14px] bg-gray-50">Ó</Text>
        </View>

        <Button variant="secondary" href="/login">Iniciar Sesión</Button>
      </View>
    </KeyboardAvoiding>
  )
}