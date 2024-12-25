import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { formatDistanceToNow } from "date-fns"; // to format the time
import { FaLink } from "react-icons/fa";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Retrieve favorite jokes from localStorage on component mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("Favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Function to remove a joke from favorites
  const removeFavorite = (joke) => {
    const updatedFavorites = favorites.filter(
      (item) => item.joke !== joke.joke
    );
    setFavorites(updatedFavorites);
    // Update localStorage
    localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));
  };
  const shareJoke = (joke) => {
    navigator.share({
      title: "Joke",
      text: joke,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-500 mb-8">
          Your <span className="text-orange-400">Favorite</span> Jokes
        </h2>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-500 text-xl">
            No favorite jokes added yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((item, index) => {
              const { joke, category, categoryColor, timeAdded } = item;

              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 p-10 flex flex-col justify-between"
                >
                  <p className="text-lg text-gray-800 mb-4">{joke}</p>

                  {/* Category Badge */}
                  <span className={`badge ${categoryColor} text-white p-2`}>
                    {category}
                  </span>

                  {/* Time Added */}
                  <p className="text-sm text-gray-500 my-4">
                    Added{" "}
                    {formatDistanceToNow(new Date(timeAdded), {
                      addSuffix: true,
                    })}
                  </p>

                  <div className="btns-container flex gap-6 items-center">
                    <div className="share-button">
                      <button onClick={()=>shareJoke(joke)}> <FaLink className="text-xl"/> </button>
                    </div>
                    {/* Remove Button */}
                    <div className="remove-btn">
                      <button
                        onClick={() => removeFavorite(item)}
                        className="btn btn-danger bg-red-500 text-white hover:bg-red-600 transition-all duration-300 ease-in-out"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Favorites;
