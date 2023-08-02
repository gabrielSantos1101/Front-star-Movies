export function Button({ onClick, title, ...rest }) {
  return (
    <button
      className="gap-2 self-stretch bg-gray-800 text-sm font-medium text-zinc-900"
      onClick={onClick}
      {...rest}
    >
      {title}
    </button>
  )
}
