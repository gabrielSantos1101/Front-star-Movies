import { CaretLeft, InstagramLogo, Popcorn } from 'phosphor-react'
import { Button } from '../components/Button'
import { User } from '../components/User'

export function UserProfile() {
  return (
    <div className="h-full w-full bg-BG-900">
      <header className="flex items-center justify-between border-b-[1px] border-gray-900 px-16 py-10">
        <h2 className="flex flex-row-reverse gap-1 text-[25px] font-bold leading-7 text-white">
          <Popcorn /> Star Movies
        </h2>
        <User url={'gabrielsantos1101'} size={12} />
      </header>

      <div className="relative grid h-full place-items-center overflow-y-auto">
        <Button title={'Voltar'} lTop transparent icon={CaretLeft} />

        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-4">
            <User url={'birobirobiro'} size={28} xl />
            <h1 className="text-4xl font-bold text-gray-100">Birobirobiro</h1>
          </div>
          <div className="flex h-fit flex-col justify-center gap-2 px-4 text-base text-gray-200">
            <a
              href="http://instagram.com/gab_santos.jpej"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <InstagramLogo size={32} /> @gab_santos.jpeg
            </a>
            <a
              href="http://instagram.com/gab_santos.jpej"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <InstagramLogo size={32} /> @gab_santos.jpeg
            </a>
            <a
              href="http://instagram.com/gab_santos.jpej"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <InstagramLogo size={32} /> @gab_santos.jpeg
            </a>
            <a
              href="http://instagram.com/gab_santos.jpej"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <InstagramLogo size={32} /> @gab_santos.jpeg
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
