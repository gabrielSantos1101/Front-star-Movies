import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { User } from '../components/User'
import { TextButton } from '../components/textButton'

export function Profile() {
  const navigate = useNavigate()
  return (
    <div className="h-full w-full bg-BG-900">
      <Header />

      <div className="absolute left-4 top-36">
        <TextButton title={'< Voltar'} istext onClick={() => navigate(-1)} />
      </div>
      <main className="relative mx-auto grid h-hv-calc max-w-7xl overflow-y-auto p-16">
        <div>
          <h1 className="text-3xl text-gray-200">Editar usuário</h1>
          <form className="mt-24 flex justify-between gap-32">
            <div className="w-full">
              <Input label={'nome completo'} Type={'text'} />
              <section className="flex gap-24">
                <div className="mt-16 grid w-full gap-4">
                  <Input label={'Instagram'} Type={'text'} />
                  <Input label={'Tiktok'} Type={'text'} />
                </div>
                <div className="mt-16 grid w-full gap-4">
                  <Input label={'Twitter'} Type={'text'} />
                  <Input label={'Threads'} Type={'text'} />
                </div>
              </section>
            </div>
            <div className="flex w-4/12 flex-col items-center gap-9">
              <div className="relative overflow-hidden">
                <h3 className="text-gray-400">Avatar</h3>
                <label
                  htmlFor="avatar"
                  className="absolute bottom-3 left-5 cursor-pointer text-gray-400"
                >
                  Fazer upload da imagem
                </label>
                <input
                  id="avatar"
                  type="file"
                  className=" mt-5 w-full cursor-pointer self-stretch rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2"
                />
              </div>
              <User url={'gabrielsantos1101'} xl rounded={false} />
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
