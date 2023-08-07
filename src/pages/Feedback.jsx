import StarIcon from '@mui/icons-material/Star'
import { Box, Rating } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from '../components/Button'
import { Textarea } from '../components/Textarea'
import { useAuth } from '../hooks/auth'
import { api } from '../services/api'

const labels = {
  0.5: 'Horrivel',
  1: 'Horrivel+',
  1.5: 'Ruim',
  2: 'Ruim+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Bom',
  4: 'Bom+',
  4.5: 'Excelente',
  5: 'Excelente+',
}

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`
}

export function Feedback() {
  const { movie_id } = useParams()
  const { handleErrorFetchData } = useAuth()

  const navigate = useNavigate()

  const [movie, setMovie] = useState({})

  const [value, setValue] = useState(0)
  const [hover, setHover] = useState(-1)

  const [text, setText] = useState('')

  function handleChangeTextArea(value) {
    setText(value)
  }

  async function handleSubmitForm() {
    try {
      await api.post(`/comment/${movie_id}`, {
        description: text,
        rating_movie: Math.ceil(value),
      })
      toast.success('Comentario criado com sucesso')
      navigate(`/feed/${movie_id}`)
    } catch (error) {
      handleErrorFetchData(error)
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: movieResponse } = await api.get(`movie/${movie_id}`)

        setMovie(movieResponse)
      } catch (error) {
        handleErrorFetchData(error)
      }
    }
    getData()
  }, [handleErrorFetchData, movie_id, setValue])

  return (
    <div className="h-full w-full bg-BG-900">
      <main className="relative grid  w-full p-16">
        <div className="mx-auto w-full max-w-7xl">
          <h1 className="text-3xl text-gray-200">Cadastrar comentário</h1>
          <form className="mt-6 flex justify-between gap-32">
            <fieldset className="w-full">
              <label className="text-gray-400">
                Adicionar comentário
                <Textarea
                  placeholder={'Sinopse do filme'}
                  changeState={handleChangeTextArea}
                  text={text}
                />
              </label>
              <div className="mb-12">
                <h3 className="mt-6 text-gray-400">Nota</h3>
                <div className="flex w-52 items-center">
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(e, newValue) => {
                      setValue(newValue)
                    }}
                    onChangeActive={(e, newHover) => {
                      setHover(newHover)
                    }}
                    emptyIcon={<StarIcon className="text-gray-900" />}
                  />
                  {value !== null && (
                    <Box sx={{ ml: 2 }} className="text-gray-400">
                      {labels[hover !== -1 ? hover : value]}
                    </Box>
                  )}
                </div>
              </div>
              <div className="mt-7 flex items-center justify-center gap-8">
                <Button
                  title={'comentar'}
                  isCreate
                  onClick={handleSubmitForm}
                />
                <Button title={'Excluir'} isRed />
              </div>
            </fieldset>
            <fieldset className="flex h-hv-calc w-full min-w-[225px] max-w-[450px] flex-col gap-9 overflow-y-auto">
              <div>
                <h2 className="text-3xl text-white">
                  Filme: {movie.title && movie.title}
                </h2>
                <p className="text-justify">
                  {movie.image && (
                    <img
                      className="mb-4 mt-6 inline-flex rounded-xl"
                      src={`${api.defaults.baseURL}/files/${movie.image}`}
                      alt={`imagem do filme ${movie.title}`}
                    />
                  )}
                  <span>
                    sinopse: <br />
                  </span>
                  {movie.sinopse && movie.sinopse}
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      </main>
    </div>
  )
}
