import { Popcorn } from 'phosphor-react'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Loader } from '../components/Loader'
import { TextButton } from '../components/textButton'
import { useAuth } from '../hooks/auth'
import { api } from '../services/api'

export function SignUp() {
  const { token, handleErrorFetchData, loading } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isChecked, setChecked] = useState(false)

  const navigate = useNavigate('')

  function handleCheck() {
    if (!isChecked) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }

  async function handleSign() {
    if (!name || !email || !password) {
      toast.error('Preencha todos os campos')
      return
    }

    if (!isChecked) {
      toast.error('Aceite os termos e condições')
    }

    if (password.length < 8) {
      toast.error('A senha deve ter no mínimo 8 caracteres')
      return
    }

    if (isChecked === true) {
      await api
        .post(
          '/user',
          {
            name,
            email,
            password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then(() => {
          toast.success('Usuário criado com sucesso')
          navigate(-1)
        })
        .catch((err) => {
          handleErrorFetchData(err)
        })
    }
  }

  return (
    <main className="flex h-full w-full">
      {loading && (
        <div className="absolute left-0 top-0 z-10 grid h-screen w-screen scale-110 place-items-center bg-BG-defocus backdrop-blur-[2px]">
          <Loader />
        </div>
      )}
      <aside className=" flex shrink grow basis-0 flex-col justify-between self-stretch border-zinc-800 bg-BG-800 p-10">
        <div className="inline-flex items-center justify-start gap-2">
          <h2 className="flex gap-1 text-[25px] font-bold leading-7 text-white">
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
            className="text-sm font-normal leading-tight text-white "
            target="_blank"
            href="#"
          >
            Rocketseat
          </a>
        </div>
      </aside>

      <section className="relative flex shrink grow basis-0 flex-col items-center justify-center gap-6 self-stretch bg-BG-900">
        <div className="absolute right-20 top-11">
          <TextButton title={'Login'} onClick={() => navigate(-1)} />
        </div>

        <div className="py-2 text-center">
          <h1 className="text-2xl font-semibold leading-loose text-neutral-50">
            Crie uma conta
          </h1>
          <p className="text-sm font-normal leading-tight text-zinc-400">
            Digite o seu e-mail abaixo para criar a sua conta
          </p>
        </div>

        <form className="flex w-80 flex-col items-center gap-6">
          <Input
            placeholder={'ex: gabriel Santos'}
            type={'text'}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder={'email@explorer.com'}
            type={'email'}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder={'senha min: 8 caracteres'}
            type={'password'}
            minlength="8"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            title={'Criar conta'}
            isFull
            isPurple
            onClick={() => {
              handleSign()
            }}
          />

          <fieldset className="flex gap-2 text-sm font-normal leading-tight text-zinc-400">
            <input type="checkbox" id="box" onChange={() => handleCheck()} />
            <label htmlFor="box">
              Concordo com os Termos e Políticas de privacidade.
            </label>
          </fieldset>
        </form>
      </section>
    </main>
  )
}
