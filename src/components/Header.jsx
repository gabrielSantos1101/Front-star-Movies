import { Popcorn } from 'phosphor-react'
import React from 'react'
import { User } from './User'

export function Header() {
  return (
    <header className="flex items-center justify-between border-b-[1px] border-gray-900 px-16 py-10">
      <h2 className="flex flex-row-reverse gap-1 text-[25px] font-bold leading-7 text-white">
        <Popcorn /> Star Movies
      </h2>
      <User url={'gabrielsantos1101'} />
    </header>
  )
}
