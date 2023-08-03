import { CreateFilm } from './pages/CreateFilm'
import { Feedback } from './pages/Feedback'
import { FilmList } from './pages/FilmList'
import { Overhaul } from './pages/Overhaul'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

export function App() {
  return (
    <>
      <FilmList />
      <Overhaul />
      <SignUp />
      <SignIn />
      <CreateFilm />
      <Feedback />
    </>
  )
}
