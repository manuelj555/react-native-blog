import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { useMutation } from '@tanstack/react-query'
import { loginUser, registerUser } from '../api/users'
import { supabase } from '../service/supabase'

export function useAuth () {
  const { user, signIn, signOut } = useContext(AuthContext)

  return {
    user,
    signIn,
    signOut,
  }
}

export function useRegistration () {
  const { mutateAsync, isLoading } = useMutation((userData) => registerUser({ userData }), {
    onSuccess (data) {
      console.log({ data })
    }
  })

  return {
    registerUser: mutateAsync,
    isLoading,
  }
}

export function useLogin () {
  const { signIn } = useAuth()
  const { mutateAsync, isLoading } = useMutation((loginData) => loginUser({ ...loginData }), {
    onSuccess (data) {
      console.log(data.user)
      signIn({ email: data.user.email, ...data.user.user_metadata })
    },
    onError (error) {
      console.error({ error })
    }
  })

  return {
    login: mutateAsync,
    isLoading,
  }
}

export function useLogout () {
  const { signOut, user } = useAuth()
  const { mutateAsync, isLoading } = useMutation(
    async () => {
      await supabase.auth.signOut()

      return true
    },
    {
      onSuccess () {
        signOut()
      }
    }
  )

  return {
    logout: mutateAsync,
    isLoading,
  }
}