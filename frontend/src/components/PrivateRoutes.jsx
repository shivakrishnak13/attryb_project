import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

   const {isdealerauth} = useSelector((store)=> store.AuthReducer);
    console.log(isdealerauth)
  return isdealerauth? children : <Navigate to={"/login"} />
}

export default PrivateRoutes;