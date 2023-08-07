import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [imageUpdated, setImageUpdated] = useState('')
  const [loading, setLoading] = useState(false)

  async function signIn({ email, password }) {
    setLoading(true)
    try {
      const response = await api.post('/user/session', { email, password })
      const { token } = response.data

      localStorage.setItem('token', token)

      setData({ token })
    } catch (err) {
      setLoading(false)
      console.error(err)
      toast.error('Usuário ou senha inválidos')
    }
    setLoading(false)
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

  function handleChangeImageUser(newImageUrl) {
    setImageUpdated(newImageUrl)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      // api.defaults.headers.common.Authorization = `Bearer ${data.token}`
      setData({ token })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        loading,
        token: data.token,
        handleErrorFetchData,
        imageUpdated,
        handleChangeImageUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
