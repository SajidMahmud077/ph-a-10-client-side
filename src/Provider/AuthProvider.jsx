import { createContext, useState, useEffect } from "react";
import app from "../Firebase/Firebase.config.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
    // const userProfile=(updateUser)=>{
    //   console.log(updateUser)
    //   return;
    //   updateProfile(currentUser,updateUser)
    // };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };


  const logOut = () => {
    return signOut(auth);
  };
  const updateUserProfile=(updateData)=>{
    return updateProfile(auth,currentUser,updateData)
  }




  const authInfo = {
    user,
    updateUserProfile,
    setUser,
    createUser,
    signInUser,
    signInWithGoogle,
    logOut,
    loading,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
