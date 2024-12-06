import slide1 from "../assets/slider1.jpg";
import slide2 from "../assets/slider2.jpg";
import slide3 from "../assets/slider3.jpg";
import slide4 from "../assets/slide4.jpg";
import { useLoaderData} from "react-router-dom";

const Home = () => {
  const movies = useLoaderData();

  const featuredMovies = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
  return (
    <>
      <header className="container mx-auto px-2">
        <div className="carousel w-full rounded-lg shadow-lg">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={slide1}
              className="w-full h-[650px] object-cover bg-center rounded-2xl"
              alt="Slide 1"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide4"
                className="btn btn-circle bg-gray-800 text-white"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle bg-gray-800 text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={slide2}
              className="w-full h-[650px] object-cover rounded-2xl"
              alt="Slide 2"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide1"
                className="btn btn-circle bg-gray-800 text-white"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle bg-gray-800 text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={slide3}
              className="w-full h-[650px] object-cover bg-center rounded-2xl"
              alt="Slide 3"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide2"
                className="btn btn-circle bg-gray-800 text-white"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn btn-circle bg-gray-800 text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src={slide4}
              className="w-full h-[650px] object-cover rounded-2xl"
              alt="Slide 4"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide3"
                className="btn btn-circle bg-gray-800 text-white"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle bg-gray-800 text-white"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
            Featured Top Rated Movies
          </h2>
          <p className="text-gray-500 mt-2">
            Explore the best-rated movies curated just for you.
          </p>
          <div className="mt-2 w-20 h-1 bg-gradient-to-r  from-yellow-300 to-red-400 mx-auto"></div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {featuredMovies.map((movie) => (
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
                <h3 className="text-2xl font-semibold mb-2">{movie.title}</h3>
                <p className="text-lg font-semibold text-gray-300 mb-1">
                  Genre: {movie.genre}
                </p>
                <p className="text-lg font-semibold text-gray-300 mb-1">
                  Duration: {movie.duration} Min
                </p>
                <p className="text-lg font-semibold text-gray-300">
                  Release Year: {movie.releaseyear}
                </p>
                <button
                  className="mt-4 bg-gradient-to-r bg-yellow-500 hover:from-orange-600 hover:to-red-600 text-black px-4 py-2 rounded font-semibold"
                  
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
