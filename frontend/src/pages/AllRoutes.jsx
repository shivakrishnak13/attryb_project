import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import DealersPage from './DealersPage'
import UsersPage from './UsersPage'
import Register from './Register'
import AddCar from './AddCar'
import PrivateRoutes from '../components/PrivateRoutes'

const AllRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dealers' element={
        <PrivateRoutes>
        <DealersPage/>
        </PrivateRoutes>
        } />
        <Route path='/users-car' element={<UsersPage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/add-car' element={<AddCar/>} />
    </Routes>
  )
}

export default AllRoutes