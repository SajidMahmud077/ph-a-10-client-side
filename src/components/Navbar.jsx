import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-white bg-yellow-400 px-3 py-1 rounded-xl" : ""
        }
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "text-white bg-yellow-400 px-3 py-1 rounded-xl" : ""
        }
        to="/allmovies"
      >
        AllMovies
      </NavLink>

      {user && user.email ? (
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white bg-yellow-400 px-3 py-1 rounded-xl" : ""
          }
          to="/myfavourite"
        >
          My Favorites
        </NavLink>
      ) : null}

      {user && user.email ? (
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white bg-yellow-400 px-3 py-1 rounded-xl" : ""
          }
          to="/addmovie"
        >
          AddMovie
        </NavLink>
      ) : null}
    </>
  );

  return (
    <div>
      <nav>
        <div className="navbar container mx-auto py-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div role="button" className="btn btn-ghost lg:hidden"></div>
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {links}
              </ul>
            </div>
            <div>
              <a href="" className="text-2xl">
                <span className="font-bold text-4xl text-yellow-300 inline-block">
                  M
                </span>
                <span className="inline-block text-2xl font-bold">
                  oviesCloud
                </span>
              </a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-6 font-semibold text-lg">
              {links}
            </ul>
          </div>
          <div className="navbar-end gap-4">
            {user ? (
              <>
                <div className="relative group">
                  <img
                    src={user?.photoURL || "User"}
                    alt={user?.displayName || ""}
                    className="w-10 h-10 rounded-full"
                  />
                  {user?.displayName && (
                    <span className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded-lg shadow-lg">
                      {user.displayName}
                    </span>
                  )}
                </div>
                <button
                  onClick={logOut}
                  className="bg-red-500 px-5 py-2 text-white rounded-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={
                    location.pathname === "/login"
                      ? "bg-yellow-400 px-7 py-2 rounded-full text-white font-semibold"
                      : "font-semibold"
                  }
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={
                    location.pathname === "/register"
                      ? "bg-yellow-400 px-7 py-2 rounded-full text-white font-semibold"
                      : "font-semibold"
                  }
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
