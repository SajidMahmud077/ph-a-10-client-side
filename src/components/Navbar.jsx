import React from 'react';


import { NavLink, Link,useLocation } from "react-router-dom";

const Navbar = () => {
  const location=useLocation()
  const links = (
    <>
      <NavLink to="/" className={({isActive})=>
      isActive? 'text-yellow-300':''
      }>Home</NavLink>
      <NavLink className={({isActive})=>
      isActive? 'text-yellow-300':''
      } to="/allmovies">AllMovies</NavLink>
    </>
  );
  return (
    <div>
      <nav>
        <div className="navbar container mx-auto py-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl">
              <span className="font-extrabold text-4xl text-yellow-300 inline-block align-middle">
                M
              </span>
              <span className="inline-block text-yellow-400 font-bold">oviesCloud</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-6 font-semibold text-lg">{links}</ul>
          </div>
          <div className="navbar-end gap-4">
            <Link to="/login" className={location.pathname === '/login'? 'text-yellow-500 font-semibold' : ''}>
              Login
            </Link>
            <Link to="/register" className={location.pathname === '/register'? 'text-yellow-500 font-semibold': ''}>
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;