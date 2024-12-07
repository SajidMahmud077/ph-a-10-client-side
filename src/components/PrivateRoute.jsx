import React from 'react';
import { Navigate,useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const PrivateRoute = ({children}) => {
  const {user,loading}=useContext(AuthContext)
  console.log('private router',user)
  const location=useLocation()

  if(loading){
    return <div className='justify-center items-center w-2/12 mx-auto mt-36 '>
          <span className="loading loading-bars loading-lg"></span>
    </div>
  }

  if(!user){
    return <Navigate state={{from:location.pathname}} to='/login'></Navigate>
  }
  return  children
};

export default PrivateRoute;