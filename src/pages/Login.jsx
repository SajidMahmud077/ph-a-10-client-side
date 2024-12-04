import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import loginbg from '../assets/loginbg.jpg'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
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
      <form className="card-body w-[350px]">
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
            <button><FcGoogle /></button>
          </div>
          <div>
          <p>Signup with Google</p>
          </div>
        </div>
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