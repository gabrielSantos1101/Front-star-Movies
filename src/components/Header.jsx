import { Popcorn } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from './Input'
import { User } from './User'

export function Header() {
  return (
    <header className="flex items-center justify-between border-b-[1px] border-gray-900 px-16 py-10">
      <Link to={'/'}>
        <h2 className="flex flex-row-reverse gap-1 text-[25px] font-bold leading-7 text-white">
          <Popcorn /> Star Movies
        </h2>
      </Link>
      <div className="w-2/3">
        <Input Type={'search'} placeholder={'Pesquise por comentário'} />
      </div>
      <User url={'gabrielsantos1101'} />
    </header>
  )
}
