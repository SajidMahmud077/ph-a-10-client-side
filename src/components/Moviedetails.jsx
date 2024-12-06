import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import { useLoaderData } from "react-router-dom";

const Moviedetails = () => {
  const movie = useLoaderData(); 

  return (
    <>
  <nav>
    <Navbar/>
  </nav>
    <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-232px)]">
      <div className="flex flex-col md:flex-row bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex-none">
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-full md:w-80 object-cover"
          />
        </div>

        <div className="flex-1 p-6">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">{movie.title}</h2>
          <p className="text-gray-200 mb-2">
            <strong>Genre:</strong> {movie.genre}
          </p>
          <p className="text-gray-300 mb-2">
            <strong>Duration:</strong> {movie.duration}
          </p>
          <p className="text-gray-200 mb-2">
            <strong>Release Year:</strong> {movie.releaseyear}
          </p>
          <p className="text-gray-200 mb-2">
            <strong>Rating:</strong> {movie.rating}
          </p>

          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Summary:</h3>
            <p className="text-gray-400">{movie.summary}...</p>
          </div>
          <div className="mt-12 flex gap-4">
            <button
              className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:to-green-400 text-white rounded-lg font-semibold"
            >
              Add to Favorites
            </button>
            <button
              className="px-4 py-2 bg-gradient-to-r from-red-600 to-yellow-300 hover:to-red-500 text-white rounded-lg font-semibold"
          
            >
            Delete Movie
            </button>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <Footer/>
    </footer>
    </>
  );
};

export default Moviedetails;
