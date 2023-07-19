import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import DealersPage from './DealersPage'
import UsersPage from './UsersPage'
import Register from './Register'

const AllRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dealers' element={<DealersPage/>} />
        <Route path='/users' element={<UsersPage/>} />
        <Route path='/register' element={<Register/>} />
    </Routes>
  )
}

export default AllRoutes