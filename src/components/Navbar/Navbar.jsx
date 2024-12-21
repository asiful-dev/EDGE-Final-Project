import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <nav className="nav-container p-6 px-8 flex justify-between items-center relative">
      <div className="logo flex items-center">
        <div className="logo-img w-16">
          <img src="/src/assets/Images/logo-removebg-preview.png" alt="" />
        </div>
        <h2 className="font-semibold text-[1.5rem] text-gray-500">
          jokes<span className="font-bold text-orange-400"> overflow</span>
        </h2>
      </div>

      <ul className="nav-links font-semibold text-[1.25rem] hidden md:flex md:gap-x-4">
        <li>
         <Link to={'/'} className="smooth-underline">Home</Link>
        </li>
        <li>
          <Link to={'/favourites'} className="smooth-underline">Favourites</Link>
        </li>
      </ul>
      <FaBars
        id="hamburger-icon"
        className="text-[1.5rem] transition duration-150 hover:text-orange-400 hover:ease-in md:hidden"
        onClick={toggleDropDown}
      ></FaBars>
      {dropDown && (
        <div
          className={`dropdown-menu font-bold absolute top-[5rem] right-6 bg-white shadow-md rounded-md p-4 transition-transform duration-200 ease-in-out ${
            dropDown ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-y-2">
            <li>
            <Link to={'/'} className="smooth-underline">Home</Link>
            </li>
            <li>
            <Link to={'/favourites'} className="smooth-underline">Favourites</Link>
            </li>
           
          </ul>
        </div>
      )}
    </nav>
  );
}
