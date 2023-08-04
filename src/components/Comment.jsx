import { User } from './User'

export function Comment({ value, user, ...rest }) {
  return (
    <div className="flex w-full gap-4 ">
      <User rounded={false} />
      <div className=" min-h-[126px] w-11/12 rounded-lg rounded-ss-none bg-BG-700 p-6 pr-14">
        <span className="text-white">{user}</span>
        <p className="mt-4 max-h-96 overflow-auto text-justify text-gray-200">
          {value}
        </p>
      </div>
    </div>
  )
}
