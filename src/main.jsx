import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'
import HomeLayout from './layout/HomeLayout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Allmovies from './pages/Allmovis'
import Addmovie from './pages/Addmovie'
import Moviedetails from './components/Moviedetails'
import Myfavourite from './pages/Myfavourite';
import AuthProvider from './Provider/AuthProvider'
import PrivateRoute from './components/PrivateRoute'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader: async () => {
          const response = await fetch("https://ph-assignment-10-server-gold.vercel.app/movie");
          const data = await response.json();
          console.log(data); 
          return data;
        },
        
      }

    ]
  },
  {
    path:'/addmovie',
    element:<PrivateRoute>
        <Addmovie/>
    </PrivateRoute>
      
  },
  {
    path:'/moviedetails/:id',
    element:<PrivateRoute>
    <Moviedetails/>
  </PrivateRoute>,
    loader:({params})=> fetch(`https://ph-assignment-10-server-gold.vercel.app/movie/${params.id}`)

  },

  {
    path:'/allmovies',
    element:<Allmovies/>,
    loader:()=> fetch('https://ph-assignment-10-server-gold.vercel.app/movie')
  },
  {
    path:'/myfavourite',
    element:<PrivateRoute>
      <Myfavourite/>
    </PrivateRoute>,
    loader:({params})=>fetch(`https://ph-assignment-10-server-gold.vercel.app/movie/${params.email}`)

  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <ToastContainer position="top-center" autoClose={3000} />
    <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>
)
