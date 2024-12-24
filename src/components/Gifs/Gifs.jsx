import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { FaSearch } from "react-icons/fa";

function Gifs() {
  const api_key = import.meta.env.VITE_GIPHY_API_KEY;
  //   console.log(api_key);
  const [gifs, setGifs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const fetchGifs = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchText}&limit=12`
    )
      .then((res) => res.json())
      .then((gifs) =>
        // console.log(gifs.data[0].images.original.webp);
        setGifs(gifs.data)
      );
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchGifs();
    }
  };
  return (
    <>
      <Navbar />
      <div className="Gifs-container my-8">
        <h2 className="text-center text-gray-500 my-8 text-4xl font-bold">
          Search <span className="text-orange-400">Gifs</span>
        </h2>
        <div className="search-container flex flex-col items-center">
          <label className="input input-bordered  w-96 flex items-center gap-2 ">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button>
              <FaSearch />
            </button>
          </label>
        </div>
        <div className="gifs-card-container my-10 grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gifs.map((gif) => (
            <div
              className="card bg-base-100 w-96 shadow-xl rounded-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
              key={gif.id}
            >
              <figure className="overflow-hidden rounded-t-lg">
                <img
                  src={gif.images.original.webp}
                  alt="Gif"
                  className="w-full h-64 object-cover object-center transform transition-all duration-300 ease-in-out hover:scale-105"
                />
              </figure>
              <div className="card-body p-6">
                <h2 className="card-title text-xl font-semibold text-gray-800 mb-4">
                  {gif.title}
                  <div className="badge bg-orange-400 text-white p-3 ml-2 text-sm">
                    Trending
                  </div>
                </h2>
                <div className="card-actions flex justify-between items-center">
                  <div className="badge badge-outline text-orange-400 text-md p-4 rounded-full border-2 hover:bg-orange-400 hover:text-white transition-all">
                    {gif.type}
                  </div>
                  <div className="badge badge-outline text-orange-400 text-md p-4 rounded-full border-2 hover:bg-orange-400 hover:text-white transition-all">
                    {gif.username || "Anonymous"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gifs;
