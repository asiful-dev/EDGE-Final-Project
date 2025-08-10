import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Using real Link for routing

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleLinkClick = (path) => {
    setDropDown(false);
  };

  const navLinks = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/favourites", label: "Favourites", icon: "❤️" },
    { path: "/randomjoke", label: "Random Joke", icon: "🎲" },
    { path: "/categories", label: "Categories", icon: "📂" },
    { path: "/gifs", label: "Gifs", icon: "🎬" },
  ];

  return (
    <nav className="relative bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Link to="/">
                  <img
                    src="/Images/logo-removebg-preview.png"
                    alt="Jokes Overflow Logo"
                    className="w-8 h-8 object-contain"
                  />
                </Link>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-gray-800">
                jokes
                <span className="text-orange-500 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  overflow
                </span>
              </h1>
              <p className="text-xs text-gray-500 -mt-1">
                Where bugs become features
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`group relative px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 no-underline ${
                    activeLink === link.path
                      ? "bg-orange-100 text-orange-600 shadow-md"
                      : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  <span className="text-sm group-hover:scale-110 transition-transform duration-200">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                  {activeLink === link.path && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-orange-500 rounded-full"></div>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleDropDown}
            className="md:hidden relative group p-2 rounded-xl bg-gray-100 hover:bg-orange-100 transition-all duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div
                className={`w-5 h-0.5 bg-gray-600 group-hover:bg-orange-600 transition-all duration-300 ${
                  dropDown ? "rotate-45 translate-y-1" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-gray-600 group-hover:bg-orange-600 transition-all duration-300 mt-1 ${
                  dropDown ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-gray-600 group-hover:bg-orange-600 transition-all duration-300 mt-1 ${
                  dropDown ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {dropDown && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setDropDown(false)}
            ></div>
            <div className="absolute top-full right-6 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50 md:hidden">
              <div className="py-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`w-full px-6 py-3 text-left font-semibold transition-all duration-200 flex items-center space-x-3 ${
                      activeLink === link.path
                        ? "bg-orange-50 text-orange-600 border-r-4 border-orange-500"
                        : "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.label}</span>
                    {activeLink === link.path && (
                      <div className="ml-auto w-2 h-2 bg-orange-500 rounded-full"></div>
                    )}
                  </Link>
                ))}
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">😂</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Jokes Overflow
                    </p>
                    <p className="text-xs text-gray-500">Making coding fun!</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
