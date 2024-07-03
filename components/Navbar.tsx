"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="absolute top-0 z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-md bg-slate-800">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            href="/"
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          >
            Portfolyo-App
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={toggleNavbar}
          >
            <i className="fas fa-bars text-white"></i>
          </button>
        </div>
        <div
          className={`${
            isNavbarOpen ? "" : "hidden"
          } lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none bg-blueGray-800`}
          id="example-collapse-navbar"
        >
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="flex items-center">
              <Link
                href="/projects"
                className="bg-white text-slate-700 active:bg-slate-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:bg-slate-500 hover:text-white outline-none focus:outline-none md:mr-1 md:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              >
                <i className="fas fa-arrow-alt-circle-right"></i> Projects
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="/about"
                className="bg-white text-slate-700 active:bg-slate-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:bg-slate-500 hover:text-white outline-none focus:outline-none md:mr-1 md:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              >
                <i className="far fa-file-alt leading-lg mr-2 md:text-grey-200 text-grey-400"></i>{" "}
                About Me
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="/contact"
                className="bg-white text-slate-700 active:bg-slate-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:bg-slate-500 hover:text-white outline-none focus:outline-none md:mr-1 md:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              >
                <i className="fa-solid fa-square-phone"></i> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
