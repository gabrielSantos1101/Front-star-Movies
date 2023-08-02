export function User({ url, rounded = true, xl }) {
  return (
    <img
      src={`https://github.com/${url}.png`}
      alt="imagem de avatar"
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={`${xl ? 'h-32 w-32' : 'h-12 w-12'} ${
        rounded ? 'rounded-full' : 'rounded-xl'
      } `}
    />
  )
}
