import { InstagramLogo, TiktokLogo, TwitterLogo } from 'phosphor-react'
import { useParams } from 'react-router-dom'
import ThreadsLogo from '../assets/threads.svg'
import { User } from '../components/User'
import { TextButton } from '../components/textButton'

export function UserProfile() {
  const { user_id } = useParams()
  return (
    <div className="h-full w-full bg-BG-900">
      <main className="relative grid h-full place-items-center overflow-y-auto">
        <div className="absolute left-8 top-8">
          <TextButton istext title={'< Voltar'} to={-1} />
        </div>

        <section className="flex h-full w-full flex-col items-center justify-center gap-3 pb-40">
          <div className="flex flex-col items-center gap-4">
            <div className="pointer-events-none">
              <User url={'birobirobiro'} size={28} xl />
            </div>
            <h1 className="text-4xl font-bold text-gray-100">Birobirobiro</h1>
          </div>
          <div className="flex h-fit flex-col justify-center gap-2 px-4 text-base text-gray-200">
            <a
              href={`http://instagram.com/${insta}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <InstagramLogo size={32} /> @birobirobiro
            </a>
            <a
              href={`http://tiktok.com/${tiktok}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <TiktokLogo size={32} /> @birobirobiro
            </a>
            <a
              href={`http://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <TwitterLogo size={32} /> @birobirobiro
            </a>
            <a
              href={`http://threads.com/${threads}`}
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
