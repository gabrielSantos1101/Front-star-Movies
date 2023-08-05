import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/user/session', { email, password })
      const { token } = response.data

      localStorage.setItem('token', token)

      setData({ token })
    } catch (err) {
      toast.error('Usuário ou senha inválidos')
    }
  }

  function signOut() {
    localStorage.removeItem('token')
    setData({})
  }

  function handleErrorFetchData(error) {
    if (error.response.status === 401) {
      toast.error(error.response.data.message)
      signOut()
    } else {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      // eslint-disable-next-line dot-notation
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ token })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, token: data.token, handleErrorFetchData }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
