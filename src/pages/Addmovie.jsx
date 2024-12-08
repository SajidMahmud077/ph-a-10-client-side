import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import addmoviebg from "../assets/addmoviebg.jpg";

const Addmovie = () => {
  const {user}=useContext(AuthContext)
  const handleAddMovie=(event)=>{
    event.preventDefault();
    const form=event.target;

    const poster=form.poster.value;
    const title=form.title.value;
    const genre=form.genre.value;
    const duration=form.duration.value;
    const releaseyear=form.releaseyear.value;
    const rating=form.rating.value;
    const summary=form.summary.value;

    //valuidation part 
    if(!/^https?:\/\/.+\..+/.test(poster)){
      Swal.fire({
        title: "Error!",
        text: "Movie Poster Must be a Valid URL",
        icon: "error",
      });
      return;
    }

    if(title.length < 2){
      Swal.fire({
        title: "Error!",
        text: "Movie Title must have at least 2 characters",
        icon: "error",
      });
      return;
    }

    if(!genre){
      Swal.fire({
        title: "Error!",
        text: "please select a genre",
        icon: "error",
      });
      return;
    }
    if(!duration || duration < 60 ){
      Swal.fire({
        title: "Error!",
        text: "Duration must  be 60 minutes",
        icon: "error",
      });
      return;
    }
    if(!releaseyear){
      Swal.fire({
        title: "Error!",
        text: "please give release year",
        icon: "error",
      });
      return;
    }

    if(!rating){
      Swal.fire({
        title: "Error!",
        text: "please  fillup valid rating 1 to 10",
        icon: "error",
      });
      return;
    }

    if(summary.length < 10){
      Swal.fire({
        title: "Error!",
        text: "summary must be 10 characters",
        icon: "error",
      });
      return;
    }


    const newMovie = {
      poster,
      title,
      genre,
      duration: Number(duration), 
      releaseyear: Number(releaseyear), 
      rating: Number(rating),  
      summary,
      userEmail:user?.email || '' ,
    
    };

    console.log(newMovie)

    fetch('https://ph-assignment-10-server-gold.vercel.app/movie', {
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(newMovie)
    })
    .then(res=> res.json())
    .then(data =>{
      if(data.insertedId){
        Swal.fire({
          title: "Success!",
          text: "Movie Added Successfully",
          icon: "success"
        });
      }
      console.log(data)
    })
    
  }
  return (
    <div>
      <Navbar />
      <div
        className="bg-cover bg-center items-center"
        style={{ backgroundImage: `url(${addmoviebg})` }}
      >
        <div className="max-w-sm md:max-w-md   mx-auto border-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-600 text-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Add Movie</h2>
          <form onSubmit={handleAddMovie}>
            <div className="mb-2">
              <label
                htmlFor="poster"
                className="block text-sm font-semibold mb-2"
              >
                Movie Poster (Image URL)
              </label>
              <input
                type="text"
                id="poster"
                name="poster"
                placeholder="Image URL"
                className="block w-full bg-white text-gray-800 border-none rounded-lg shadow focus:ring-2 focus:ring-pink-400 focus:outline-none px-4 py-2"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="title"
                className="block text-sm font-semibold mb-2"
              >
                Movie Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter movie title"
                className="block w-full bg-white text-gray-800 border-none rounded-lg shadow focus:ring-2 focus:ring-purple-400 focus:outline-none px-4 py-2"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="genre"
                className="block text-sm font-semibold mb-2"
              >
                Genre
              </label>
              <select
                id="genre"
                name="genre"
                className="block w-full bg-white text-gray-800 border-none rounded-lg shadow focus:ring-2 focus:ring-purple-400 focus:outline-none px-4 py-2"
              >
                <option value="" disabled selected>
                  Select a Genre
                </option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="action">Action</option>
                <option value="romance">Romance</option>
              </select>
            </div>

            <div className="mb-2">
              <label
                htmlFor="duration"
                className="block text-sm font-semibold mb-2"
              >
                Duration (in minutes)
              </label>
              <input
                type="number"
                id="duration"
                name="duration"
                placeholder="Enter duration"
                min="60"
                className="block w-full bg-white text-gray-800 border-none rounded-lg shadow focus:ring-2 focus:ring-purple-400 focus:outline-none px-4 py-2"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="releaseYear"
                className="block text-sm font-semibold mb-2"
              >
                Release Year
              </label>
              <input
                type="number"
                id="releaseYear"
                name="releaseyear"
                placeholder="Enter release year"
                min="1900"
                max="2024"
                step="1"
                className="block w-full bg-white text-gray-800 border-none rounded-lg shadow focus:ring-2 focus:ring-indigo-400 focus:outline-none px-4 py-2"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="rating"
                className="block text-sm font-semibold mb-2"
              >
                Rating (out of 10)
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                placeholder="Enter rating"
                min="1"
                max="10"
                step="0.1"
                className="block w-full bg-white text-gray-800 border-none rounded-lg shadow focus:ring-2 focus:ring-pink-400 focus:outline-none px-4 py-2"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="summary"
                className="block text-sm font-semibold mb-2"
              >
                Summary
              </label>
              <textarea
                id="summary"
                name="summary"
                placeholder="Enter movie summary"
                rows="4"
                className="block w-full bg-white text-gray-800 border-none rounded-lg shadow focus:ring-2 focus:ring-pink-400 focus:outline-none px-4 py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              Add Movie
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Addmovie;
