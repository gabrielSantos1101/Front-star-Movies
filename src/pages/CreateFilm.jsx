import { Popcorn } from 'phosphor-react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Textarea } from '../components/Textarea'
import { User } from '../components/User'

export function CreateFilm() {
  return (
    <div className="h-full w-full bg-BG-900">
      <header className="flex items-center justify-between border-b-[1px] border-gray-900 px-16 py-10">
        <h2 className="flex flex-row-reverse gap-1 text-[25px] font-bold leading-7 text-white">
          <Popcorn /> Star Movies
        </h2>
        <User url={'gabrielsantos1101'} />
      </header>

      <main className="relative grid h-hv-calc w-full overflow-y-auto p-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl text-gray-200">Cadastrar filme</h1>
          <form className="mt-6 flex justify-between gap-32">
            <section className="w-full">
              <div className="mb-8 flex gap-24">
                <Input
                  label={'Titulo do filme'}
                  placeholder={'ex: Titanic'}
                  Type={'text'}
                />
                <Input
                  isFit
                  label={'Ano do filme'}
                  placeholder={'ex: 1997'}
                  Type={'text'}
                />
              </div>
              <label className="text-gray-400">Sinopse</label>
              <Textarea placeholder={'Sinopse do filme'} />
              <div className="mt-7 flex items-center justify-center gap-8">
                <Button title={'Salvar alterações'} />
                <Button title={'Excluir Filme'} isRed={true} />
              </div>
            </section>
            <aside className="flex w-4/12 min-w-[225px] flex-col items-center gap-9">
              <div className="relative overflow-hidden">
                <h3 className="text-gray-400">Capa do filme</h3>
                <label
                  htmlFor="avatar"
                  className="absolute bottom-3.5 left-5 cursor-pointer text-sm text-gray-400"
                >
                  Fazer upload da imagem
                </label>
                <input
                  id="avatar"
                  type="file"
                  className=" mt-5 w-full self-stretch rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2"
                />
              </div>
              <img
                className="rounded-xl"
                src="https://cinema10.com.br/upload/filmes/filmes_12336_tita.jpg"
                alt="imagem do filme titanic"
              />
            </aside>
          </form>
        </div>
      </main>
    </div>
  )
}
