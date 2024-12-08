import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bg from '../assets/bg.jpg'
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const {createUser,setUser,updateUserProfile}=useContext(AuthContext)
  const [error,setError]=useState('')
  const navigate=useNavigate()
  const handleRegister= e =>{
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(!passwordRegex.test(password)){
      setError('"Password must have at least one uppercase,Must have a lowercase letter, and be at least 6 characters long."');
      toast.error(
          "Registration Unsuccessful! Please Fullfil Password Criteria"
      );
      return
    }
    setError('')
    createUser(email,password)
    .then(result =>{
      const  user=result.user;
      setUser(user)
      toast.success('Registration Successfull!');
      updateUserProfile({displayName:name,photoURL:photoUrl})
      navigate('/')
    })
    .catch((error)=>{
      console.log('Error',error)
      setError('Already hava an account!')
    })
  

  }
  return (
    <>
    <Navbar/>
    <div className='min-h-[calc(100vh-232px)] bg-cover bg-center' style={{backgroundImage:`url(${bg})`}}>
    <div className="hero">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-3xl text-white font-bold">Register Now</h1>
    </div>
    <div className="card  w-full  bg-slate-100/20 border-2">
      <form onSubmit={handleRegister}
        className="card-body w-[400px]">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p  className="label-text-alt text-white  font-bold">Already have an Account?<a  className='text-xl font-semibold text-white ml-2' href='/login'>Login</a></p>
          </label>
          {
            error && <p className='text-white text-sm'>{error}</p>
          }
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning text-white font-semibold">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>

</div>
    
    <Footer/>
        
    </>
  );
};

export default Register;