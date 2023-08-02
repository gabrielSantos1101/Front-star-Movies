import { Popcorn } from 'phosphor-react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

export function SignUp() {
  return (
    <div className="w-full h-full flex">
      <div className="grow shrink basis-0 self-stretch p-10 bg-BG-800 border-zinc-800 flex-col justify-between flex">
        <div className="justify-start items-center gap-2 inline-flex">
          <h2 className="text-white text-[25px] font-bold leading-7 flex gap-1">
            {' '}
            <Popcorn /> Star Movies
          </h2>
        </div>
        <div className="self-stretch h-28">
          <p className="self-stretch text-white text-lg font-normal leading-7">
            Cillum dolore sint labore commodo aute dolore cupidatat labore esse.
            Consectetur pariatur veniam in dolor ullamco ex elit eu fugiat
            voluptate elit do esse laborum.
          </p>
          <a
            className="text-white text-sm font-normal leading-tight "
            target="_blank"
            href="#"
          >
            Rocketseat
          </a>
        </div>
      </div>

      <div className="relative grow shrink basis-0 self-stretch bg-BG_900 flex-col justify-center items-center gap-6 flex">
        <Button
          className="absolute top-10 right-12 py-2 px-5 bg-zinc-950 rounded-md border border-slate-800 text-neutral-50"
          title={'Login'}
        />

        <div className="py-2 text-center">
          <h1 className="text-neutral-50 text-2xl font-semibold leading-loose">
            Crie uma conta
          </h1>
          <p className="text-zinc-400 text-sm font-normal leading-tight">
            Digite o seu e-mail abaixo para criar a sua conta
          </p>
        </div>

        <form className="flex-col items-center gap-6 flex">
          <Input placeholder={'email@explorer.com'} />

          <Button
            className="self-stretch bg-neutral-50 py-2 rounded-md"
            title={'Acessar com e-mail'}
          />

          <div className="text-zinc-400 text-sm font-normal leading-tight flex gap-2">
            <input type="checkbox" id='box'/>
            <label htmlFor="box">Concordo com os Termos e Políticas de privacidade.</label>
          </div>
        </form>
      </div>
    </div>
  )
}
