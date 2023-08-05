import { Route, Routes } from 'react-router-dom'
import { CreateFilm } from '../pages/CreateFilm'
import { Feed } from '../pages/Feed'
import { Feedback } from '../pages/Feedback'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { UserProfile } from '../pages/UserProfile'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feed/:movie_id" element={<Feed />} />
      <Route path="/profile/" element={<Profile />} />
      <Route path="/create/film" element={<CreateFilm />} />
      <Route path="/comment/:movie_id" element={<Feedback />} />
      <Route path="/user/:user_id" element={<UserProfile />} />
    </Routes>
  )
}
