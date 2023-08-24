import { createContext, useEffect, useState } from 'react'
import { router, useSegments } from 'expo-router'

export const AuthContext = createContext(null)

export function AuthProvider ({ children }) {
  const [user, setUser] = useState(null)
  const segments = useSegments()

  useEffect(() => {
    const isSecureScreen = segments[0] === '(secure)'

    if (!isSecureScreen) return

    if (!user) {
      router.replace('/login')
    }

  }, [user, segments])

  return (
    <AuthContext.Provider value={{
      user,
      signIn: user => setUser(user),
      signOut: () => setUser(null),
    }}>
      {children}
    </AuthContext.Provider>
  )
}