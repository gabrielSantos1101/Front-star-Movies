import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Popcorn } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../hooks/auth'
import { api } from '../services/api'
import { Input } from './Input'
import { User } from './User'

export function Header() {
  const { signOut } = useAuth()
  const [anchorEl, setAnchorEl] = useState(null)
  const [image, setImage] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    async function getUser() {
      await api
        .get('/user')
        .then((res) => {
          setImage(res.data.image)
        })
        .catch((err) => {
          toast.error(err)
        })
    }
    getUser()
  }, [])

  const open = Boolean(anchorEl)
  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleSignOut() {
    handleClose()
    signOut()
    navigate('/')
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function handleProfile() {
    handleClose()
    navigate('/profile')
  }

  return (
    <header className="flex items-center justify-between border-b-[1px] border-gray-900 px-16 py-10">
      <Link to={'/'}>
        <h2 className="flex flex-row-reverse gap-1 text-[25px] font-bold leading-7 text-white">
          <Popcorn /> Star Movies
        </h2>
      </Link>
      <div className="w-2/3">
        <Input Type={'search'} placeholder={'Pesquise por comentário'} />
      </div>
      <button onClick={(e) => handleClick(e)}>
        <div className="pointer-events-none">
          <User url={image} />
        </div>
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ top: '10px', left: '-10px' }}
      >
        <MenuItem onClick={() => handleProfile()}>Perfil</MenuItem>
        <MenuItem
          onClick={() => handleSignOut()}
          className="hover:text-red-500"
        >
          Sair
        </MenuItem>
      </Menu>
    </header>
  )
}
