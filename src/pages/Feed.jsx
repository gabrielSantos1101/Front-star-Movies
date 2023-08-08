import StarIcon from '@mui/icons-material/Star'
import { Rating } from '@mui/material'
import { PencilLine } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { Comment } from '../components/Comment'
import { Loader } from '../components/Loader'
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
  const { handleErrorFetchData, token } = useAuth()
  const { movie_id } = useParams()
  const navigate = useNavigate()

  const [movie, setMovie] = useState({})
  const [comments, setComments] = useState([])

  const [userEmail, setUserEmail] = useState('')
  const [value, setValue] = useState(0)
  const [hover, setHover] = useState(-1)

  function deleteComment(id) {
    setComments((prevState) => prevState.filter((comment) => comment.id !== id))
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const [movieResponse, userResonse] = await Promise.all([
          await api.get(`/movie/${movie_id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          await api.get(`/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ])

        setUserEmail(userResonse.data.email)
        setMovie(movieResponse.data)
        setComments(movieResponse.data.comments)
        setValue(movieResponse.data.averageRating)
      } catch (err) {
        navigate('/')
        handleErrorFetchData(err)
      }
    }
    getData()
  }, [token, navigate, handleErrorFetchData, movie_id, setValue])

  if (!movie.image) {
    return (
      <main className="relative grid h-screen w-full place-items-center pb-36">
        <Loader />
      </main>
    )
  }

  return (
    <main className="relative grid h-hv-calc w-full p-16">
      <div className="absolute left-8 top-8">
        <TextButton title={'< Voltar'} istext onClick={() => navigate(-1)} />
      </div>
      <div className="mx-auto w-full max-w-7xl">
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
            {comments.length > 0 &&
              comments.map((comment) => (
                <Comment
                  key={comment.id}
                  id={comment.id}
                  user={comment.name}
                  email={comment.email}
                  image={comment.image}
                  value={comment.description}
                  isPossibleDelete={comment.email === userEmail}
                  deleteComment={deleteComment}
                />
              ))}
          </section>
          <aside className="flex h-hv-section w-full min-w-[225px] flex-col gap-9 overflow-y-auto">
            <div className="flex items-start gap-8">
              <img
                className="w-64 rounded-xl"
                src={`${movie.image}`}
                alt="imagem do filme titanic"
              />
              <div>
                <h1 className="text-4xl text-white">Fime: {movie.title}</h1>
                <div className="mx-auto mt-5 flex w-52 flex-col items-center">
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
                    <div className="ml-2 text-gray-400">
                      {labels[hover !== -1 ? hover : value]}
                    </div>
                  )}
                </div>
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
  )
}
