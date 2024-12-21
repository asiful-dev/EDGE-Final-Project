import React from 'react'

export default function Navbar() {
  return (
    <nav className='nav-container p-6 flex justify-between items-center'>
        <div className="logo flex items-center">
            <div className="logo-img w-16">
                <img src="/src/assets/Images/logo-removebg-preview.png" alt="" />
            </div>
            <h2 className='font-semibold text-[1.5rem] text-gray-500'>jokes<span className='font-bold text-orange-400'> overflow</span></h2>
        </div>

        <ul className="nav-links font-semibold flex gap-x-4">
            <li><a href="">Home</a></li>
            <li><a href="">Favourites</a></li>
        </ul>
    </nav>
  )
}
