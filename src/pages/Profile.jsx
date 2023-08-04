import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { User } from '../components/User'
import { api } from '../services/api'

export function Profile() {
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [insta, setInsta] = useState('')
  const [twitter, setTwitter] = useState('')
  const [tiktok, setTiktok] = useState('')
  const [threads, setThreads] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    async function getUser() {
      await api
        .get('/user')
        .then((res) => {
          setName(res.data.name)
          setInsta(res.data.instagram_url)
          setTwitter(res.data.twitter_url)
          setTiktok(res.data.tiktok_url)
          setThreads(res.data.threads_url)
          setImage(res.data.image)
        })
        .catch((err) => {
          toast.error(err)
        })
    }
    getUser()
  }, [])

  function handleBack() {
    navigate(-1)
  }

  async function handleSubmit() {
    const form = new FormData()
    form.append('name', name)
    form.append('image', image)
    form.append('instagram_url', insta)
    form.append('twitter_url', twitter)
    form.append('tiktok_url', tiktok)
    form.append('threads_url', threads)

    try {
      await api.put('/user', form)
      navigate(-1) // talvez mudar isso
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="h-full w-full bg-BG-900">
      <Header />

      <main className="relative mx-auto grid h-hv-calc max-w-7xl overflow-y-auto p-16">
        <div>
          <h1 className="text-3xl text-gray-200">Editar usuário</h1>
          <form className="mt-24 flex justify-between gap-32">
            <div className="w-full">
              <Input
                label={'nome completo'}
                Type={'text'}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <fieldset>
                <div className="flex gap-24">
                  <div className="mt-16 grid w-full gap-4">
                    <Input
                      label={'Instagram'}
                      Type={'text'}
                      onChange={(e) => setInsta(e.target.value)}
                      value={insta}
                    />
                    <Input
                      label={'Tiktok'}
                      Type={'text'}
                      onChange={(e) => setTiktok(e.target.value)}
                      value={tiktok}
                    />
                  </div>
                  <div className="mt-16 grid w-full gap-4">
                    <Input
                      label={'Twitter'}
                      Type={'text'}
                      onChange={(e) => setTwitter(e.target.value)}
                      value={twitter}
                    />
                    <Input
                      label={'Threads'}
                      Type={'text'}
                      onChange={(e) => setThreads(e.target.value)}
                      value={threads}
                    />
                  </div>
                </div>
                <div className="mx-auto me-auto mt-28 flex w-fit gap-5">
                  <Button
                    title={'Salvar Alterações'}
                    isAdd
                    onClick={() => handleSubmit()}
                  />
                  <Button title={'Cancelar'} isRed onClick={handleBack} />
                </div>
              </fieldset>
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
                  onChange={(e) => {
                    setImage(e.target.files[0])
                  }}
                />
              </div>
              <div className="pointer-events-none">
                <User url={image} xl rounded={false} />
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
