import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import LoginRegister from './LoginRegister'
import DealersPage from './DealersPage'
import UsersPage from './UsersPage'

const AllRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginRegister/>} />
        <Route path='/dealars' element={<DealersPage/>} />
        <Route path='/users' element={<UsersPage/>} />
    </Routes>
  )
}

export default AllRoutes