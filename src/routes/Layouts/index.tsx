import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import React from 'react'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
