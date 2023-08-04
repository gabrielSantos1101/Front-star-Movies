import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { Film } from '../components/Film'
import { Header } from '../components/Header'

export function Home() {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/create/film')
  }
  return (
    <div className="h-full w-full bg-BG-900">
      <Header />

      <main className="relative grid h-hv-calc w-full overflow-y-auto p-16">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex gap-4">
            <h1 className="text-3xl text-gray-200">lista de filmes</h1>
            <Button isAdd title={'Adicionar filme'} onClick={handleClick} />
          </div>

          <section className="mt-9 flex w-full flex-wrap gap-6">
            <Film
              user={'joão Inácio'}
              value={
                'Titanic é um filme de romance e tragédia de 1997 dirigido, escrito, produzido e co-editado por James Cameron. É baseado no naufrágio do RMS Titanic, que afundou no Atlântico Norte na noite de 14 de abril de 1912, após colidir com um iceberg durante sua viagem inaugural de Southampton para Nova York City. O filme apresenta Leonardo DiCaprio e Kate Winslet como membros de diferentes classes sociais que se apaixonam a bordo do navio.'
              }
              to={'/feed'}
            />
            <Film
              user={'joão Inácio'}
              value={
                'Titanic é um filme de romance e tragédia de 1997 dirigido, escrito, produzido e co-editado por James Cameron. É baseado no naufrágio do RMS Titanic, que afundou no Atlântico Norte na noite de 14 de abril de 1912, após colidir com um iceberg durante sua viagem inaugural de Southampton para Nova York City. O filme apresenta Leonardo DiCaprio e Kate Winslet como membros de diferentes classes sociais que se apaixonam a bordo do navio.'
              }
              to={'/feed'}
            />
            <Film
              user={'joão Inácio'}
              value={
                'Titanic é um filme de romance e tragédia de 1997 dirigido, escrito, produzido e co-editado por James Cameron. É baseado no naufrágio do RMS Titanic, que afundou no Atlântico Norte na noite de 14 de abril de 1912, após colidir com um iceberg durante sua viagem inaugural de Southampton para Nova York City. O filme apresenta Leonardo DiCaprio e Kate Winslet como membros de diferentes classes sociais que se apaixonam a bordo do navio.'
              }
              to={'/feed'}
            />
            <Film
              user={'joão Inácio'}
              value={
                'Titanic é um filme de romance e tragédia de 1997 dirigido, escrito, produzido e co-editado por James Cameron. É baseado no naufrágio do RMS Titanic, que afundou no Atlântico Norte na noite de 14 de abril de 1912, após colidir com um iceberg durante sua viagem inaugural de Southampton para Nova York City. O filme apresenta Leonardo DiCaprio e Kate Winslet como membros de diferentes classes sociais que se apaixonam a bordo do navio.'
              }
              to={'/feed'}
            />
            <Film
              user={'joão Inácio'}
              value={
                'Titanic é um filme de romance e tragédia de 1997 dirigido, escrito, produzido e co-editado por James Cameron. É baseado no naufrágio do RMS Titanic, que afundou no Atlântico Norte na noite de 14 de abril de 1912, após colidir com um iceberg durante sua viagem inaugural de Southampton para Nova York City. O filme apresenta Leonardo DiCaprio e Kate Winslet como membros de diferentes classes sociais que se apaixonam a bordo do navio.'
              }
              to={'/feed'}
            />
            <Film
              user={'joão Inácio'}
              value={
                'Titanic é um filme de romance e tragédia de 1997 dirigido, escrito, produzido e co-editado por James Cameron. É baseado no naufrágio do RMS Titanic, que afundou no Atlântico Norte na noite de 14 de abril de 1912, após colidir com um iceberg durante sua viagem inaugural de Southampton para Nova York City. O filme apresenta Leonardo DiCaprio e Kate Winslet como membros de diferentes classes sociais que se apaixonam a bordo do navio.'
              }
              to={'/feed'}
            />
            <Film
              user={'joão Inácio'}
              value={
                'Titanic é um filme de romance e tragédia de 1997 dirigido, escrito, produzido e co-editado por James Cameron. É baseado no naufrágio do RMS Titanic, que afundou no Atlântico Norte na noite de 14 de abril de 1912, após colidir com um iceberg durante sua viagem inaugural de Southampton para Nova York City. O filme apresenta Leonardo DiCaprio e Kate Winslet como membros de diferentes classes sociais que se apaixonam a bordo do navio.'
              }
              to={'/feed'}
            />
            <Film
              user={'joão Inácio'}
              value={
                'Titanic é um filme de romance e tragédia de 1997 dirigido, escrito, produzido e co-editado por James Cameron. É baseado no naufrágio do RMS Titanic, que afundou no Atlântico Norte na noite de 14 de abril de 1912, após colidir com um iceberg durante sua viagem inaugural de Southampton para Nova York City. O filme apresenta Leonardo DiCaprio e Kate Winslet como membros de diferentes classes sociais que se apaixonam a bordo do navio.'
              }
              to={'/feed'}
            />
            <Film
              user={'joão Inácio'}
              value={
                'Titanic é um filme de romance e tragédia de 1997 dirigido, escrito, produzido e co-editado por James Cameron. É baseado no naufrágio do RMS Titanic, que afundou no Atlântico Norte na noite de 14 de abril de 1912, após colidir com um iceberg durante sua viagem inaugural de Southampton para Nova York City. O filme apresenta Leonardo DiCaprio e Kate Winslet como membros de diferentes classes sociais que se apaixonam a bordo do navio.'
              }
              to={'/feed'}
            />
            <Film
              user={'joão Inácio'}
              value={
                'Titanic é um filme de romance e tragédia de 1997 dirigido, escrito, produzido e co-editado por James Cameron. É baseado no naufrágio do RMS Titanic, que afundou no Atlântico Norte na noite de 14 de abril de 1912, após colidir com um iceberg durante sua viagem inaugural de Southampton para Nova York City. O filme apresenta Leonardo DiCaprio e Kate Winslet como membros de diferentes classes sociais que se apaixonam a bordo do navio.'
              }
              to={'/feed'}
            />
          </section>
        </div>
      </main>
    </div>
  )
}
