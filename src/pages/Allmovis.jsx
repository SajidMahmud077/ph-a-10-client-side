import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLoaderData,useNavigate } from "react-router-dom";

const Allmovis = () => {
  const movies=useLoaderData()
  const navigate=useNavigate()
  return (
    <div>
      <Navbar/>
      <div className='min-h-[calc(100vh-232px)]'>
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
            All Movies
          </h2>
          <p className="text-gray-500 mt-2">
            Explore the All-Movies movies curated just for you.
          </p>
          <div className="mt-2 w-20 h-2 bg-gradient-to-r  from-yellow-300 to-red-400 mx-auto"></div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-[350px] object-cover"
                />
                <span className="absolute top-2 right-2 flex bg-yellow-500 text-black text-lg font-semibold px-2 py-1 rounded">
                  {movie.rating}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 ">{movie.title}</h3>
                <p className="text-lg font-semibold text-gray-300 mb-1">
                  Genre: {movie.genre}
                </p>
                <p className="text-lg font-semibold text-gray-300 mb-1">
                  Duration: {movie.duration} Min
                </p>
                <p className="text-lg font-semibold text-gray-300">
                  Release Year: {movie.releaseyear}
                </p>
                <button onClick={()=> navigate(`/moviedetails/${movie._id}`)}
                  className="mt-4 bg-gradient-to-r bg-yellow-500 hover:from-orange-600 hover:to-red-600 text-black px-4 py-2 rounded font-semibold"
                  
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
      
      </main>

      </div>
      <Footer/>

    </div>
  );
};

export default Allmovis;