import { Popcorn } from 'phosphor-react'
import { useState } from 'react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { TextButton } from '../components/textButton'
import { useAuth } from '../hooks/auth'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <div className="flex h-full w-full">
      <div className="flex shrink grow basis-0 flex-col justify-between self-stretch border-zinc-800 bg-BG-800 p-10">
        <div className="inline-flex items-center justify-start gap-2">
          <h2 className="flex gap-1 text-[25px] font-bold leading-7 text-white">
            {' '}
            <Popcorn /> Star Movies
          </h2>
        </div>
        <div className="h-28 self-stretch">
          <p className="self-stretch text-lg font-normal leading-7 text-white">
            Cillum dolore sint labore commodo aute dolore cupidatat labore esse.
            Consectetur pariatur veniam in dolor ullamco ex elit eu fugiat
            voluptate elit do esse laborum.
          </p>
          <a
            className="text-sm font-normal leading-tight text-white"
            target="_blank"
            href="#"
          >
            Rocketseat
          </a>
        </div>
      </div>

      <div className="relative flex shrink grow basis-0 flex-col items-center justify-center gap-6 self-stretch bg-BG-900">
        <div className="absolute right-12 top-10">
          <TextButton title={'Cadastre-se'} to={'/register'} />
        </div>

        <div className="py-2 text-center">
          <h1 className="text-2xl font-semibold leading-loose text-neutral-50">
            Faça o login
          </h1>
          <p className="text-sm font-normal leading-tight text-zinc-400">
            Digite o seu e-mail abaixo para acessar o Star Movies 🍿
          </p>
        </div>

        <form className="flex w-80 flex-col items-center gap-6">
          <fieldset className="flex flex-col items-center gap-4 self-stretch">
            <Input
              placeholder={'email@explorer.com'}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder={'senha'}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              isPurple
              isFull
              title={'Acessar com e-mail'}
              onClick={() => handleSignIn()}
            />
          </fieldset>
        </form>
      </div>
    </div>
  )
}
