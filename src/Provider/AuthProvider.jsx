import React from 'react';
import { createContext, useState } from "react";
import app from '../Firebase/Firebase.config.js'

import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export const AuthContext=createContext();
const auth = getAuth(app);
const googleAuthProvider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true)


  // create user
  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle=()=>{
    return signInWithPopup(auth,googleAuthProvider)
  }



  const authInfo={
    name:'sajid mahmud',
    user,
    setUser,
    createUser,
    signInUser,
    signInWithGoogle,
  }



return(
  <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
);
};

export default AuthProvider;