import { Link } from 'react-router-dom'
import { api } from '../services/api'

export function User({ url, rounded = true, xl }) {
  return (
    <Link to="/profile" className="h-fit">
      <img
        src={`${api.defaults.baseURL}/files/${url}`}
        alt="imagem de avatar"
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className={`${xl ? 'h-32 w-32' : ''} ${
          rounded ? 'rounded-full' : 'rounded-xl'
        } h-12 w-12`}
      />
    </Link>
  )
}
