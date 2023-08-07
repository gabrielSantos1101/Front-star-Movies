import { InstagramLogo, TiktokLogo, TwitterLogo } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ThreadsLogo from '../assets/threads.svg'
import { User } from '../components/User'
import { TextButton } from '../components/textButton'
import { useAuth } from '../hooks/auth'
import { api } from '../services/api'

export function UserProfile() {
  const { handleErrorFetchData, token } = useAuth()
  const [insta, setInsta] = useState()
  const [twitter, setTwitter] = useState()
  const [tiktok, setTiktok] = useState()
  const [threads, setThreads] = useState()
  const [image, setImage] = useState()
  const [name, setName] = useState()
  const { email } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function getUser() {
      try {
        await api
          .post(
            '/user/selectUser',
            { email },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          .then((response) => {
            setInsta(response.data.instagram_url)
            setTwitter(response.data.twitter_url)
            setTiktok(response.data.tiktok_url)
            setThreads(response.data.threads_url)
            setImage(response.data.image)
            setName(response.data.name)
          })
      } catch (err) {
        handleErrorFetchData(err)
        navigate('/')
      }
    }
    getUser()
  }, [email, navigate, handleErrorFetchData, token])
  return (
    <div className="h-full w-full bg-BG-900">
      <main className="relative grid h-full place-items-center overflow-y-auto">
        <div className="absolute left-8 top-8">
          <TextButton istext title={'< Voltar'} to={-1} />
        </div>

        <section className="flex h-full w-full flex-col items-center justify-center gap-3 pb-40">
          <div className="flex flex-col items-center gap-4">
            <div className="pointer-events-none">
              <User url={image} size={28} xl />
            </div>
            <h1 className="text-4xl font-bold text-gray-100">{name}</h1>
          </div>
          <div className="flex h-fit flex-col justify-center gap-2 px-4 text-base text-gray-200">
            <a
              href={`http://instagram.com/${insta}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <InstagramLogo size={32} /> @{insta}
            </a>
            <a
              href={`http://tiktok.com/${tiktok}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <TiktokLogo size={32} /> @{tiktok}
            </a>
            <a
              href={`http://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <TwitterLogo size={32} /> @{twitter}
            </a>
            <a
              href={`http://threads.net/${threads}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <img
                src={ThreadsLogo}
                alt="Thraeds Logo"
                className="w-6 brightness-75"
              />
              @{threads}
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
