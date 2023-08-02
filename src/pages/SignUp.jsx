import { Popcorn } from 'phosphor-react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

export function SignUp() {
  return (
    <div className="flex h-full w-full">
      <div className=" flex shrink grow basis-0 flex-col justify-between self-stretch border-zinc-800 bg-BG-800 p-10">
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
      </div>

      <div className="relative flex shrink grow basis-0 flex-col items-center justify-center gap-6 self-stretch bg-BG-900">
        <Button
          className="absolute right-12 top-10 rounded-md border border-slate-800 bg-zinc-950 px-5 py-2 text-neutral-50"
          title={'Login'}
        />

        <div className="py-2 text-center">
          <h1 className="text-2xl font-semibold leading-loose text-neutral-50">
            Crie uma conta
          </h1>
          <p className="text-sm font-normal leading-tight text-zinc-400">
            Digite o seu e-mail abaixo para criar a sua conta
          </p>
        </div>

        <form className="flex flex-col items-center gap-6">
          <Input placeholder={'email@explorer.com'} type={'email'} />

          <Button
            className="self-stretch rounded-md bg-neutral-50 py-2"
            title={'Acessar com e-mail'}
          />

          <div className="flex gap-2 text-sm font-normal leading-tight text-zinc-400">
            <input type="checkbox" id="box" />
            <label htmlFor="box">
              Concordo com os Termos e Políticas de privacidade.
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}
