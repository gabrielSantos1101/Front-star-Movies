export function Button({
  onClick,
  icon: Icon,
  title,
  transparent = false,
  lTop,
  isAdd,
  isRed = false,
  ...rest
}) {
  return (
    <button
      className={`${
        isAdd
          ? 'text-jade-500 transition-colors hover:bg-jade-600 hover:text-gray-100'
          : ''
      }
      ${Icon ? 'flex items-center gap-2' : ''} ${
        transparent ? 'bg-transparent text-gray-400 hover:text-gray-300' : ''
      } ${lTop ? 'absolute left-6 top-8 -translate-y-1/2' : 'relative'} ${
        isRed
          ? 'bg-red-500 text-gray-200 hover:bg-red-700'
          : 'bg-BG-900 text-gray-200 hover:bg-gray-900'
      } rounded-md border border-slate-800 px-5 py-2 text-neutral-50`}
      onClick={onClick}
      {...rest}
    >
      {Icon && <Icon size={16} />}
      {title}
    </button>
  )
}
