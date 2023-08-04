import { InstagramLogo, TiktokLogo, TwitterLogo } from 'phosphor-react'
import ThreadsLogo from '../assets/threads.svg'
import { Header } from '../components/Header'
import { User } from '../components/User'
import { TextButton } from '../components/textButton'

export function UserProfile() {
  return (
    <div className="h-full w-full bg-BG-900">
      <Header />

      <main className="relative grid h-full place-items-center overflow-y-auto">
        <TextButton title={'Voltar'} />

        <section className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-4">
            <User url={'birobirobiro'} size={28} xl />
            <h1 className="text-4xl font-bold text-gray-100">Birobirobiro</h1>
          </div>
          <div className="flex h-fit flex-col justify-center gap-2 px-4 text-base text-gray-200">
            <a
              href="http://instagram.com/birobirobiro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <InstagramLogo size={32} /> @birobirobiro
            </a>
            <a
              href="http://instagram.com/birobirobiro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <TiktokLogo size={32} /> @birobirobiro
            </a>
            <a
              href="http://instagram.com/birobirobiro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <TwitterLogo size={32} /> @birobirobiro
            </a>
            <a
              href="http://instagram.com/birobirobiro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <img
                src={ThreadsLogo}
                alt="Thraeds Logo"
                className="w-6 brightness-75"
              />
              @birobirobiro
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
