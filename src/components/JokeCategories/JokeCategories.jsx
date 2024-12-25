import React, { useState, useEffect } from "react";
import {
  FaPython,
  FaJsSquare,
  FaBug,
  FaRobot,
  FaDatabase,
  FaNetworkWired,
  FaLinux,
  FaGitAlt,
  FaCode,
  FaCuttlefish,
  FaJava,
  FaLink,
  FaHeart,
} from "react-icons/fa";
import { JokeData } from "../../JokeData";
import Navbar from "../Navbar/Navbar";

// Categories array (same as before)
const categories = [
  { name: "Python Jokes", icon: <FaPython />, color: "bg-green-500" },
  { name: "JavaScript Jokes", icon: <FaJsSquare />, color: "bg-yellow-500" },
  { name: "Bug Jokes", icon: <FaBug />, color: "bg-red-500" },
  { name: "AI Jokes", icon: <FaRobot />, color: "bg-blue-500" },
  { name: "Database Jokes", icon: <FaDatabase />, color: "bg-indigo-500" },
  { name: "Networking Jokes", icon: <FaNetworkWired />, color: "bg-teal-500" },
  { name: "Linux Jokes", icon: <FaLinux />, color: "bg-gray-800" },
  { name: "Version Control Jokes", icon: <FaGitAlt />, color: "bg-orange-500" },
  { name: "General CS Jokes", icon: <FaCode />, color: "bg-purple-500" },
  { name: "C/C++ Jokes", icon: <FaCuttlefish />, color: "bg-pink-500" },
  { name: "Java jokes", icon: <FaJava />, color: "bg-amber-600" },
];

function JokeCategories() {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    // Check sessionStorage for saved category
    const savedCategory = sessionStorage.getItem("Selected Category");
    return savedCategory || "Python Jokes";
  });

  const [visibleJokesCount, setVisibleJokesCount] = useState(3);
  const [favorites, setFavorites] = useState(() => {
    // Get saved favorites from localStorage
    const savedFavorites = localStorage.getItem("Favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const shareJoke = (joke) => {
    navigator.share({
      title: "Joke",
      text: joke,
    });
  };

  const getJokesForCategory = (category) => {
    const categoryData = JokeData.find((data) => data.category === category);
    return categoryData ? categoryData.jokes : [];
  };

  const jokes = getJokesForCategory(selectedCategory);

  const handleShowMore = () => {
    setVisibleJokesCount((prevCount) => prevCount + 3);
  };

  const addToFavorites = (joke) => {
    const category = selectedCategory; // Get current category
    const timeAdded = new Date().toISOString(); // Get the current time in ISO format

    // Get category color from categories array
    const categoryColor = categories.find((cat) => cat.name === category)?.color;

    // Create a favorite item with joke, category, time, and color
    const favoriteItem = { joke, category, timeAdded, categoryColor };

    // Check if the joke is already in favorites
    if (!favorites.some((fav) => fav.joke === joke)) {
      const updatedFavorites = [...favorites, favoriteItem];
      setFavorites(updatedFavorites);
      localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));
    }
  };

  // Store the selected category to sessionStorage
  useEffect(() => {
    sessionStorage.setItem("Selected Category", selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Navbar />
      <div className="p-6 min-h-screen">
        {/* Category Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`py-4 px-4 border-2 text-lg flex items-center space-x-2 rounded hover:opacity-90 ${
                selectedCategory === category.name
                  ? `${category.color} text-white`
                  : " text-gray-500"
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Display Jokes for the selected category */}
        <div className="mt-[4rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jokes.slice(0, visibleJokesCount).map((joke, index) => (
            <div
              key={index}
              className="p-8 border-2 rounded-lg shadow-xl transform transition duration-300 hover:scale-105"
            >
              <p className="text-lg">{joke}</p>
              <div className="btns-container flex gap-8 mt-6 text-xl">
                <div className="tooltip tooltip-bottom" data-tip="Share">
                  <button onClick={() => shareJoke(joke)}>
                    <FaLink />
                  </button>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="Add to favorites">
                  <input
                    type="checkbox"
                    className="checkbox border-pink-600 [--chkbg:theme(colors.pink.500)] [--chkfg:white] checked:border-none"
                    onChange={() => addToFavorites(joke)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleJokesCount < jokes.length && (
          <div className="mt-10 text-center">
            <button
              onClick={handleShowMore}
              className={`py-2 px-6 text-white rounded-lg hover:bg-opacity-90 ${
                categories.find((category) => category.name === selectedCategory)
                  ?.color
              }`}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default JokeCategories;
