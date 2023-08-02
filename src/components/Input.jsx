import { v4 as uuidv4 } from 'uuid'

export function Input({ placeholder, label, value, onChange, Type, ...rest }) {
  const inputId = uuidv4()

  return (
    <div className="flex flex-col gap-4">
      {label && (
        <label className="text-gray-400" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className="w-full self-stretch rounded-md border border-zinc-800 bg-BG-900 px-3 py-2 text-zinc-400 "
        placeholder={placeholder}
        value={value}
        type={Type}
        onChange={onChange}
        {...rest}
      />
    </div>
  )
}
