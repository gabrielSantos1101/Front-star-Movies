import { Link } from 'react-router-dom'
import { api } from '../services/api'
import { UserCircle } from 'phosphor-react'
import { useAuth } from '../hooks/auth'
import { useEffect, useState } from 'react'

export function User({ url, rounded = true, xl, to }) {
  const { imageUpdated } = useAuth()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    setImageUrl(imageUpdated)
  }, [imageUpdated])
  console.log(imageUpdated)
  return (
    <Link to={to} className="h-fit">
      {imageUpdated.length > 0 ? (
        <img
          src={imageUrl}
          alt="imagem de avatar"
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`${xl ? 'h-32 w-32' : ''} ${
            rounded ? 'rounded-full' : 'rounded-xl'
          } h-12 w-12`}
        />
      ) : url ? (
        <img
          src={`${api.defaults.baseURL}/files/${url}`}
          alt="imagem de avatar"
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`${xl ? 'h-32 w-32' : ''} ${
            rounded ? 'rounded-full' : 'rounded-xl'
          } h-12 w-12`}
        />
      ) : (
        <UserCircle
          className={`${xl ? 'h-32 w-32' : ''} ${
            rounded ? 'rounded-full' : 'rounded-xl'
          } h-12 w-12 text-white`}
        />
      )}
    </Link>
  )
}
