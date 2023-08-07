import { v4 as uuidv4 } from 'uuid'

export function Input({
  placeholder,
  isFit,
  label,
  value,
  isIcon,
  Icon,
  onChange,
  Type,
  minlength,
  ...rest
}) {
  const inputId = uuidv4()
  const inconId = uuidv4()

  return (
    <div className={`${isFit ? 'w-fit' : ''} flex w-full flex-col gap-4`}>
      {label && (
        <label className="text-gray-400" htmlFor={inputId}>
          {label}
        </label>
      )}
      {isIcon ? (
        <label className="relative text-gray-400">
          <Icon className="absolute left-3 top-3" />
          <input
            id={inputId}
            className={`${isFit ? 'w-fit' : ''} ${
              isIcon ? 'pl-8' : ''
            } w-full self-stretch rounded-md border border-zinc-800 bg-BG-900 px-3 py-2 text-zinc-400`}
            placeholder={placeholder}
            value={value}
            type={Type}
            minLength={minlength}
            onChange={onChange}
            {...rest}
          />
        </label>
      ) : (
        <input
          id={inputId || inconId}
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
      )}
    </div>
  )
}
