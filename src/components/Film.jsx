import { Trash } from 'phosphor-react'

export function Film({ value, onClick, user, film, ...rest }) {
  function limitText(text, maxCharacters) {
    return text.slice(0, maxCharacters) + '...'
  }

  return (
    <div className="relative flex w-[49%] cursor-pointer flex-col gap-4 hover:brightness-90">
      <button
        onClick={onClick}
        className="absolute right-3 top-3 cursor-pointer text-gray-300 hover:text-red-600"
      >
        <Trash size={20} />
      </button>
      <div className=" flex h-56 flex-col items-end rounded-lg bg-BG-700 p-6 pr-14">
        <h3>{film}</h3>
        <p className="mt-4 max-h-96 overflow-auto text-justify text-gray-200">
          {limitText(value, 300)}
        </p>
        <span className="mt-4 text-sm text-white">- {user}</span>
      </div>
    </div>
  )
}
