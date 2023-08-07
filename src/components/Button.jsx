import { useNavigate } from 'react-router-dom'

export function Button({
  onClick,
  icon: Icon,
  title,
  isAdd,
  isPurple = false,
  isFull,
  isCreate,
  to,
  isRed = false,
  ...rest
}) {
  const navigate = useNavigate()
  function onClickHandler() {
    navigate(to)
  }

  return (
    <button
      type="button"
      className={`${
        isAdd
          ? 'text-jade-500 transition-colors hover:bg-jade-600 hover:text-gray-100'
          : ''
      }
      ${Icon ? 'flex items-center gap-2' : ''}
      ${isRed ? 'bg-red-500 text-gray-200 hover:bg-red-600' : ' '} ${
        isFull ? 'w-full' : ''
      } ${
        isPurple
          ? 'bg-purple-500 text-white transition hover:bg-purple-500'
          : ''
      } ${
        isCreate ? 'bg-BG-500 text-gray-900 hover:brightness-125' : ''
      } rounded-md border border-slate-800 px-5 py-2 text-neutral-50  hover:brightness-90`}
      onClick={to ? onClickHandler : onClick}
      {...rest}
    >
      {Icon && <Icon size={16} />}
      {title}
    </button>
  )
}
