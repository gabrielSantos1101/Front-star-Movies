import { v4 as uuidv4 } from 'uuid'

export function Input({
  placeholder,
  isFit,
  label,
  value,
  onChange,
  Type,
  minlength,
  ...rest
}) {
  const inputId = uuidv4()

  return (
    <div className={`${isFit ? 'w-fit' : ''} flex w-full flex-col gap-4`}>
      {label && (
        <label className="text-gray-400" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`${
          isFit ? 'w-fit' : ''
        } w-full self-stretch rounded-md border border-zinc-800 bg-BG-900 px-3 py-2 text-zinc-400`}
        placeholder={placeholder}
        value={value}
        type={Type}
        minLength={minlength}
        onChange={onChange}
        {...rest}
      />
    </div>
  )
}
