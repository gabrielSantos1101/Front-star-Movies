import { Trash } from 'phosphor-react'
import { useAuth } from '../hooks/auth'
import { api } from '../services/api'
import { User } from './User'

export function Comment({
  value,
  isPossibleDelete = false,
  deleteComment,
  id,
  user,
  image,
  email,
}) {
  const { handleErrorFetchData } = useAuth()

  async function handleDelete() {
    try {
      await api.delete(`/comment/${id}`)
      deleteComment(id)
    } catch (error) {
      handleErrorFetchData(error)
    }
  }

  return (
    <div className="relative flex w-full gap-4">
      {isPossibleDelete ? (
        <button
          onClick={handleDelete}
          className="absolute right-4 top-4 text-sm text-gray-50 hover:text-red-600"
        >
          <Trash />
        </button>
      ) : null}
      <User rounded={false} to={`/user/${email}`} url={image} />
      <div className=" min-h-[126px] w-11/12 rounded-lg rounded-ss-none bg-BG-700 p-6 pr-14">
        <span className="text-white">{user}</span>
        <p className="mt-4 max-h-96 overflow-auto text-justify text-gray-200">
          {value}
        </p>
      </div>
    </div>
  )
}
