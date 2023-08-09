import jwt_decode from 'jwt-decode'
import { Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { api } from '../services/api'

export function Movie({
  value,
  id,
  handleDelete,
  to,
  user,
  film,
  age,
  userId,
}) {
  const { token } = useAuth()
  const navigate = useNavigate()

  const [isPossibleDelete, setIsPossibleDelete] = useState(false)
  const { handleErrorFetchData } = useAuth()

  function limitText(text, maxCharacters) {
    return text.slice(0, maxCharacters) + '...'
  }
  const { sub } = jwt_decode(token)

  function onClickHandler() {
    navigate(to)
  }

  async function movieDelete(e) {
    e.stopPropagation()
    try {
      await api.delete(`/movie/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      handleDelete(id)
    } catch (error) {
      handleErrorFetchData(error)
      navigate('/')
    }
  }

  useEffect(() => {
    setIsPossibleDelete(userId === sub)
  }, [userId, sub])

  return (
    <div
      className="relative flex w-[49%] cursor-pointer flex-col gap-4 hover:brightness-90"
      onClick={onClickHandler}
    >
      {isPossibleDelete ? (
        <button
          className="absolute right-3 top-3 z-10 cursor-pointer p-1 text-xl text-gray-300 hover:text-red-600"
          onClick={(e) => movieDelete(e)}
        >
          <Trash />
        </button>
      ) : (
        ''
      )}
      <div className=" flex h-56 flex-col items-start rounded-lg bg-BG-700 p-6 pr-14">
        <h3 className="text-xl text-white">
          {film} - {age}
        </h3>
        <div className="flex h-full w-full flex-col items-start justify-between">
          <p className="mt-4 max-h-96 overflow-auto text-justify text-gray-200">
            {limitText(value, 240)}
          </p>
          <span className="mt-1 self-end text-sm text-white">- {user}</span>
        </div>
      </div>
    </div>
  )
}
