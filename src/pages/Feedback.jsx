import StarIcon from '@mui/icons-material/Star'
import { Box, Rating } from '@mui/material'
import React from 'react'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Textarea } from '../components/Textarea'

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
  const [value, setValue] = React.useState(0)
  const [hover, setHover] = React.useState(-1)

  return (
    <div className="h-full w-full bg-BG-900">
      <Header />

      <main className="relative grid h-hv-calc w-full overflow-y-auto p-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl text-gray-200">Cadastrar comentário</h1>
          <form className="mt-6 flex justify-between gap-32">
            <section className="w-full">
              <div className="mb-8 flex gap-24">
                <Input
                  label={'Titulo do filme'}
                  placeholder={'ex: Titanic'}
                  Type={'text'}
                />
                <Input
                  isFit
                  label={'Ano do filme'}
                  placeholder={'ex: 1997'}
                  Type={'text'}
                />
              </div>
              <label className="text-gray-400">Adicionar comentário</label>
              <Textarea placeholder={'Sinopse do filme'} />
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
                <Button title={'Salvar alterações'} />
                <Button title={'Excluir Filme'} isRed={true} />
              </div>
            </section>
            <div className="flex w-4/12 min-w-[225px] flex-col items-center gap-9">
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
                />
              </div>
              <img
                className="rounded-xl"
                src="https://cinema10.com.br/upload/filmes/filmes_12336_tita.jpg"
                alt="imagem do filme titanic"
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
