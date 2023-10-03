import { TextareaAutosize } from '@mui/base'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { useAuth } from '../hooks/auth'
import { api } from '../services/api'

export function CreateFilm() {
  const { handleErrorFetchData, token } = useAuth()
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
    if (age.length > 4) {
      toast.warning('Por favor só 4 numeros')
      return
    }

    const form = new FormData()

    form.append('title', title)
    form.append('age', age)
    form.append('sinopse', sinopse)
    form.append('image', image)

    try {
      await api.post('/movie', form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      toast.success('Filme criado com sucesso')
      navigate(`/`)
    } catch (err) {
      handleErrorFetchData(err)
    }
  }

  return (
    <div className="h-full w-full bg-BG-900">
      <main className="relative grid h-hv-calc w-full overflow-y-auto p-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl text-gray-200">Cadastrar filme</h1>
          <form className="mt-6 flex flex-col-reverse justify-between gap-32 lg:flex-row">
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
                  max={9999}
                />
              </div>
              <label className="text-gray-400">
                Sinopse
                <TextareaAutosize
                  placeholder="Sinopse do filme"
                  onChange={(e) => handleChangeTextArea(e.target.value)}
                  className="mt-5 max-h-96 min-h-[20rem] w-full resize-none overflow-y-auto rounded-xl border  border-solid border-mirage-950 bg-BG-900 p-5"
                />
              </label>
              <div className="mt-7 flex items-center justify-center gap-8">
                <Button title={'cancelar'} isRed={true} to={'/'} />
                <Button isCreate title={'Criar filme'} onClick={handleSubmit} />
              </div>
            </section>
            <aside className="mx-auto flex w-4/12 min-w-[225px] flex-col items-center gap-9 lg:mx-0">
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
