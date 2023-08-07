import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { Film } from '../components/Film'
import { useAuth } from '../hooks/auth'
import { api } from '../services/api'

export function Home() {
  const { handleErrorFetchData } = useAuth()
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()

  function handleClick() {
    navigate('/create/film')
  }
  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { movies },
        } = await api.get('/movie')
        setMovies(movies)
      } catch (error) {
        handleErrorFetchData(error)
      }
    }
    getData()
  }, [handleErrorFetchData])
  return (
    <div className="h-full w-full bg-BG-900">
      <main className="relative grid h-hv-calc w-full overflow-y-auto p-16">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex gap-4">
            <h1 className="text-3xl text-gray-200">lista de filmes</h1>
            <Button isAdd title={'Adicionar filme'} onClick={handleClick} />
          </div>

          <section className="mt-9 flex w-full flex-wrap gap-6">
            {movies.map((movie) => (
              <Film
                key={movie.id}
                user={movie.user_name}
                userId={movie.user_id}
                value={movie.sinopse}
                film={movie.title}
                age={movie.age}
                to={`/feed/${movie.id}`}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}
