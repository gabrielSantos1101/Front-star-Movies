import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { Loader } from '../components/Loader'
import { Movie } from '../components/Movie'
import { useAuth } from '../hooks/auth'
import { api } from '../services/api'

export function Home() {
  const { handleErrorFetchData, token } = useAuth()
  const [movies, setMovies] = useState(null)
  const navigate = useNavigate()

  function handleClick() {
    navigate('/create/film')
  }

  function handleDelete(id) {
    setMovies((prevState) => prevState.filter((movie) => movie.id !== id))
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { movies },
        } = await api.get('/movie', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setMovies(movies)
      } catch (err) {
        handleErrorFetchData(err)
      }
    }
    getData()
  }, [token, handleErrorFetchData])

  if (movies === null) {
    return (
      <main className="relative grid h-screen w-full place-items-center pb-36">
        <Loader />
      </main>
    )
  }

  return (
    <div className="h-full w-full bg-BG-900">
      <main className="relative grid h-hv-calc w-full overflow-y-auto p-16">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex items-center gap-4">
            <h1 className="text-xl text-gray-200 lg:text-3xl">
              lista de filmes
            </h1>
            <Button isAdd title={'Adicionar filme'} onClick={handleClick} />
          </div>

          <section className="mt-9 flex w-full flex-wrap gap-6">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                user={movie.user_name}
                userId={movie.user_id}
                value={movie.sinopse}
                film={movie.title}
                age={movie.age}
                to={`/feed/${movie.id}`}
                id={movie.id}
                handleDelete={handleDelete}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}
