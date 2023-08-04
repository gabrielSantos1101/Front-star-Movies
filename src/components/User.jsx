import { Link } from 'react-router-dom'

export function User({ url, rounded = true, xl }) {
  return (
    <Link to="/profile" className="h-fit">
      <img
        src={`https://github.com/${url}.png`}
        alt="imagem de avatar"
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className={`${xl ? 'h-32 w-32' : ''} ${
          rounded ? 'rounded-full' : 'rounded-xl'
        } h-12 w-12`}
      />
    </Link>
  )
}
