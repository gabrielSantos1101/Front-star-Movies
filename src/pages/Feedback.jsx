import StarIcon from '@mui/icons-material/Star'
import { Box, Rating } from '@mui/material'
import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Textarea } from '../components/Textarea'
import { api } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { toast } from 'react-toastify'

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

  const [movie, setMovie] = useState()

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
        rating_movie: value,
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
      <main className="relative grid h-hv-calc w-full overflow-y-auto p-16">
        <div className="mx-auto max-w-7xl">
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
                <Box
                  sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
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
                </Box>
              </div>
              <div className="mt-7 flex items-center justify-center gap-8">
                <Button title={'Criar comentario'} onClick={handleSubmitForm} />
                <Button title={'Voltar'} isRed={true} />
              </div>
            </fieldset>
            <fieldset className="flex w-4/12 min-w-[225px] flex-col items-center gap-9">
              <img
                className="rounded-xl "
                src={`${api.defaults.baseURL}/files/${movie.image}`}
                alt="imagem do filme titanic"
              />
            </fieldset>
          </form>
        </div>
      </main>
    </div>
  )
}
