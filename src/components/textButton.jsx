import { Link } from 'react-router-dom'

export function TextButton({ title, istext, to, onClick, ...rest }) {
  return (
    <Link
      to={to}
      className={`${
        istext
          ? 'border-none bg-transparent p-0 text-gray-400 hover:bg-inherit hover:text-gray-300'
          : 'rounded-md border border-slate-800 px-5 py-2 text-neutral-50 hover:bg-gray-900'
      }`}
      onClick={onClick}
      {...rest}
    >
      {title}
    </Link>
  )
}
