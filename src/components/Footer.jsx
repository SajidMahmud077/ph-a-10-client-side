import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#7bc4] text-base-content p-10">
      <div>
        <a className="font-bold text-3xl" href="/">
          MoviesCloud
        </a>
      </div>
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover font-semibold">Add Movies</a>
        <a className="link link-hover font-semibold">All Movies</a>
        <a className="link link-hover font-semibold">About us</a>
        <a className="link link-hover font-semibold">Contact</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="" className="text-3xl">
            <FcGoogle />
          </a>
          <a href="" className="text-3xl text-blue-500">
            <FaFacebookF />
          </a>
          <a href="" className="text-3xl text-pink-500">
            <FaSquareInstagram />
          </a>
          <a className="text-3xl" href="">
            <FaGithubSquare />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          MoviesCloud
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
