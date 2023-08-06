import { Popcorn } from 'phosphor-react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Textarea } from '../components/Textarea'
import { User } from '../components/User'
import { useState } from 'react'
import { api } from '../services/api'
import { useAuth } from '../hooks/auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export function CreateFilm() {
  const { handleErrorFetchData } = useAuth()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [age, setAge] = useState('')
  const [sinopse, setSinopse] = useState('')
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState('')

  function handleChangeTextArea(value) {
    setSinopse(value)
  }

  function changeImage(image) {
    const previewURL = URL.createObjectURL(image)

    setImagePreview(previewURL)
    setImage(image)
  }

  async function handleSubmit() {
    const form = new FormData()

    form.append('title', title)
    form.append('age', age)
    form.append('sinopse', sinopse)
    form.append('image', image)

    try {
      await api.post('/movie', form)
      toast.success('Comentario criado com sucesso')
      navigate(`/`)
    } catch (error) {
      handleErrorFetchData(error)
      console.log(error)
    }
  }

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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                  isFit
                  label={'Ano do filme'}
                  placeholder={'ex: 1997'}
                  Type={'number'}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <label className="text-gray-400">
                Sinopse
                <Textarea
                  placeholder={'Sinopse do filme'}
                  text={sinopse}
                  changeState={handleChangeTextArea}
                />
              </label>
              <div className="mt-7 flex items-center justify-center gap-8">
                <Button title={'Criar filme'} onClick={handleSubmit} />
                <Button title={'cancelar'} isRed={true} to={'/'} />
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
                  onChange={(e) => changeImage(e.target.files[0])}
                />
              </div>
              {image && (
                <img className="rounded-xl" src={imagePreview} alt="" />
              )}
            </aside>
          </form>
        </div>
      </main>
    </div>
  )
}
