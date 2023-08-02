export function Input({ placeholder, ...rest }) {
  return (
    <input
      className="self-stretch rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-zinc-400 "
      placeholder={placeholder}
      {...rest}
    />
  )
}
