import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomeLayout from './layout/HomeLayout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Allmovies from './pages/Allmovis'
import Addmovie from './pages/Addmovie'
import Moviedetails from './components/Moviedetails'

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
          const response = await fetch("http://localhost:5000/movie");
          const data = await response.json();
          console.log(data); 
          return data;
        },
        
      }

    ]
  },
  {
    path:'/addmovie',
    element:<Addmovie/>

  },
  {
    path:'/moviedetails/:id',
    element:<Moviedetails/>,
    loader:({params})=> fetch(`http://localhost:5000/movie/${params.id}`)

  },

  {
    path:'/allmovies',
    element:<Allmovies/>,
    loader:()=> fetch('http://localhost:5000/movie')
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
    <RouterProvider router={router} />

  </StrictMode>
)
