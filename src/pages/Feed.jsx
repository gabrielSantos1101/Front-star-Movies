import StarIcon from '@mui/icons-material/Star'
import { Box, Rating } from '@mui/material'
import { PencilLine } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { Comment } from '../components/Comment'
import { TextButton } from '../components/textButton'
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

export function Feed() {
  const { handleErrorFetchData } = useAuth()
  const { movie_id } = useParams()
  const navigate = useNavigate()

  const [movie, setMovie] = useState([])

  const [value, setValue] = useState(0)
  const [hover, setHover] = useState(-1)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: movieResponse } = await api.get(`movie/${movie_id}`)

        setMovie(movieResponse)
        setValue(movieResponse.averageRating)
      } catch (error) {
        handleErrorFetchData(error)
      }
    }
    getData()
  }, [handleErrorFetchData, movie_id, setValue])

  return (
    <div className="h-full w-full bg-BG-900">
      <main className="relative grid h-hv-calc w-full p-16">
        <div className="absolute left-4 top-4">
          <TextButton title={'< Voltar'} istext onClick={() => navigate(-1)} />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-5">
            <h1 className="text-3xl text-gray-200">Cadastrar comentário</h1>
            <Button
              title={'Adicionar'}
              icon={PencilLine}
              isAdd
              onClick={() => navigate(`/comment/${movie_id}`)}
            />
          </div>
          <div className="mt-6 flex justify-between gap-32">
            <section className="flex h-hv-section w-full flex-col gap-6 overflow-y-auto">
              {movie.comments &&
                movie.comments.map((comment) => (
                  <Comment
                    key={comment.id}
                    user={comment.name}
                    image={comment.image}
                    value={comment.description}
                  />
                ))}
            </section>
            <aside className="flex w-full min-w-[225px] flex-col gap-9">
              <div className="flex items-start gap-8">
                <img
                  className="w-64 rounded-xl"
                  src={`${api.defaults.baseURL}/files/${movie.image}`}
                  alt="imagem do filme titanic"
                />
                <div>
                  <h1 className="text-4xl text-white">Fime: {movie.title}</h1>
                  <Box
                    sx={{
                      width: 200,
                      display: 'flex',
                      marginInline: 'auto',
                      marginTop: '1.375rem',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Rating
                      name="hover-feedback"
                      value={value}
                      readOnly
                      precision={0.5}
                      getLabelText={getLabelText}
                      onChange={(e, newValue) => {
                        setValue(newValue)
                      }}
                      onChangeActive={(e, newHover) => {
                        setHover(newHover)
                      }}
                      emptyIcon={
                        <StarIcon
                          className="text-gray-900"
                          sx={{ fontSize: '2rem' }}
                        />
                      }
                      sx={{ fontSize: '2rem' }}
                    />
                    {value !== null && (
                      <Box sx={{ ml: 2 }} className="text-gray-400">
                        {labels[hover !== -1 ? hover : value]}
                      </Box>
                    )}
                  </Box>
                </div>
              </div>
              <div>
                <p className="flex flex-col gap-4 ">
                  <span>Sinopse:</span>
                  {movie.sinopse}
                  <span>Ano: {movie.age}</span>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}
