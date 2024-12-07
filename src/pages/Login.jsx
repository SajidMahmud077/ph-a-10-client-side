import React from 'react';
import { toast } from "react-toastify";
import { useNavigate,useLocation } from "react-router-dom";
import { useContext,useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import loginbg from '../assets/loginbg.jpg'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const {signInUser,setUser,signInWithGoogle}=useContext(AuthContext)
  const [error,setError]=useState('')
  const navigate=useNavigate()
  const location=useLocation()
  const handleLogin=e=>{
    e.preventDefault()
    const form=e.target
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)

    signInUser(email,password)
    .then((result)=>{
      const user=result.user;
      setUser(user)
      toast.success('User Login Successfully!');
      navigate(location.state?.from || "/");

    })
    .catch((error)=>{
      setError(error.message)
      toast.error('Login Failed!')
    })
  };

  const handleGoogleLogin=()=>{
    signInWithGoogle()
    .then((result)=>{
      const user=result.user
      setUser(user);
      toast.success("Successfully logged in with Google!");
      navigate(location.state?.from || "/");
    })
    .catch((error)=>{
      setError(error.message)
    })
  }

  return (
    <>
    <Navbar/>
    <div className='min-h-[calc(100vh-232px)] bg-cover bg-center' style={{backgroundImage:`url(${loginbg})`}}>
    <div className="hero">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-3xl mt-12 text-white font-bold">Login Now</h1>
    </div>
    <div className="card w-full bg-slate-100/35 border-2">
      <form onSubmit={handleLogin}
        className="card-body w-[350px]">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-semibold">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-semibold">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a className='font-semibold' href="">Forgot Password?</a>
          </label>
        </div>
        <div className="form-control ">
          <button className="btn btn-warning text-white font-semibold">Login</button>
        </div>
        <div className='border flex justify-center items-center gap-2 py-2'>
          <div className='text-3xl'>
            <button type='button' onClick={handleGoogleLogin}>
              <FcGoogle /></button>
          </div>
          <div>
          <p className='font-semibold'>Signup with Google</p>
          </div>
        </div>
        {
          error && <p className='text-sm text-white'>Paassword Incorrect! check password</p>
        }
        <label className="label">
            <p  className="label-text-alt text-white  font-bold">Don't  have an Account?<a  className='text-xl font-semibold text-white ml-2' href='/register'>Register</a></p>
          </label>
      </form>
    </div>
  </div>
</div>

</div>
    
    <Footer/>
        
    </>
  );
};

export default Login;