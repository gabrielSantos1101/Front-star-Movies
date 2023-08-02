import { Popcorn } from 'phosphor-react'
import { Input } from '../components/Input'
import { User } from '../components/User'

export function Profile() {
  return (
    <div className="h-full w-full bg-BG-900">
      <header className="flex items-center justify-between border-b-[1px] border-gray-900 px-16 py-10">
        <h2 className="flex flex-row-reverse gap-1 text-[25px] font-bold leading-7 text-white">
          <Popcorn /> Star Movies
        </h2>
        <User url={'gabrielsantos1101'} />
      </header>

      <main className="relative mx-auto grid h-hv-calc max-w-7xl overflow-y-auto p-16">
        <div>
          <h1 className="text-3xl text-gray-200">Editar usuário</h1>
          <form className="mt-24 flex justify-between gap-32">
            <div className="w-full">
              <Input label={'nome completo'} Type={'text'} />
              <section className="flex gap-24">
                <div className="mt-16 w-full">
                  <Input label={'Instagram'} Type={'text'} />
                  <Input label={'Tiktok'} Type={'text'} />
                </div>
                <div className="mt-16 w-full">
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
                  className="absolute bottom-3 left-5 text-gray-400"
                >
                  Fazer upload da imagem
                </label>
                <input
                  id="avatar"
                  type="file"
                  className=" mt-5 w-full self-stretch rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2"
                />
                {/* <Input label={'Avatar'} Type={'file'} /> */}
              </div>
              <User url={'gabrielsantos1101'} xl rounded={false} />
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
