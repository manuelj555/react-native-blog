import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'

export function useAuth () {
  const { user, signIn, signOut } = useContext(AuthContext)

  return {
    user,
    signIn,
    signOut,
  }
}