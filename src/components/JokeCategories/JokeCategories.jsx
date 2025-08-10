import React, { useState, useEffect } from "react";
import { JokeData } from "../../JokeData";
import Navbar from "../Navbar/Navbar";

const FaPython = () => <span>🐍</span>;
const FaJsSquare = () => <span>📜</span>;
const FaBug = () => <span>🐛</span>;
const FaRobot = () => <span>🤖</span>;
const FaDatabase = () => <span>🗄️</span>;
const FaNetworkWired = () => <span>🌐</span>;
const FaLinux = () => <span>🐧</span>;
const FaGitAlt = () => <span>📋</span>;
const FaCode = () => <span>💻</span>;
const FaCuttlefish = () => <span>⚡</span>;
const FaJava = () => <span>☕</span>;
const FaLink = () => <span>🔗</span>;
const FaHeart = () => <span>❤️</span>;


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
    
    return "Python Jokes";
  });

  const [visibleJokesCount, setVisibleJokesCount] = useState(3);
  const [favorites, setFavorites] = useState(() => {
    
    return [];
  });

  const shareJoke = (joke) => {
    if (navigator.share) {
      navigator.share({
        title: "Joke",
        text: joke,
      });
    }
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
    const category = selectedCategory;
    const timeAdded = new Date().toISOString();
    const categoryColor = categories.find(
      (cat) => cat.name === category
    )?.color;
    const favoriteItem = { joke, category, timeAdded, categoryColor };

    if (!favorites.some((fav) => fav.joke === joke)) {
      const updatedFavorites = [...favorites, favoriteItem];
      setFavorites(updatedFavorites);
      
    }
  };

  
  useEffect(() => {
    
  }, [selectedCategory]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Enhanced Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>

          {/* Floating background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse"></div>
          </div>

          <div className="relative z-10 max-w-full px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Programming Humor Hub 🎭
            </h1>
            <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto mb-6">
              Dive into specific programming topics and discover jokes that'll
              make your debugging sessions brighter!
            </p>
            <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full border border-white border-opacity-30">
              <span className="text-sm font-medium">
                {categories.length} Categories • Premium Developer Humor
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Enhanced Category Selection */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Choose Your Language of{" "}
              <span className="text-orange-500">Laughter</span>
            </h2>

            {/* Category Buttons with enhanced styling */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`group relative overflow-hidden rounded-2xl p-6 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 ${
                    selectedCategory === category.name
                      ? `${category.color} text-white border-transparent shadow-2xl scale-105`
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl"
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {/* Background gradient overlay for active state */}
                  {selectedCategory === category.name && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  )}

                  <div className="relative z-10 flex flex-col items-center space-y-3">
                    <div
                      className={`text-3xl transition-all duration-300 ${
                        selectedCategory === category.name
                          ? "animate-bounce scale-110"
                          : "group-hover:scale-110"
                      }`}
                    >
                      {category.icon}
                    </div>
                    <span className="font-semibold text-center leading-tight">
                      {category.name}
                    </span>
                    {selectedCategory === category.name && (
                      <div className="w-8 h-1 bg-white bg-opacity-60 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Current Category Display */}
          <div className="mb-10 text-center">
            <div
              className={`inline-block ${
                categories.find((cat) => cat.name === selectedCategory)?.color
              } text-white px-8 py-4 rounded-2xl shadow-xl`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">
                  {
                    categories.find((cat) => cat.name === selectedCategory)
                      ?.icon
                  }
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold">{selectedCategory}</h3>
                  <p className="text-white text-opacity-80 text-sm">
                    {jokes.length} jokes available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Jokes Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jokes.slice(0, visibleJokesCount).map((joke, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Category color accent */}
                <div
                  className={`h-2 ${
                    categories.find((cat) => cat.name === selectedCategory)
                      ?.color
                  }`}
                ></div>

                <div className="p-8">
                  {/* Joke content with icon */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`${
                        categories.find((cat) => cat.name === selectedCategory)
                          ?.color
                      } rounded-full p-3 flex-shrink-0 shadow-lg`}
                    >
                      <div className="text-2xl text-white">
                        {
                          categories.find(
                            (cat) => cat.name === selectedCategory
                          )?.icon
                        }
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-800 leading-relaxed text-lg">
                        {joke}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced action buttons */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex gap-4">
                      <button
                        onClick={() => shareJoke(joke)}
                        className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 group"
                      >
                        <div className="group-hover:scale-110 transition-transform">
                          <FaLink />
                        </div>
                        <span className="text-sm font-medium">Share</span>
                      </button>

                      <label className="flex items-center space-x-2 bg-gray-100 hover:bg-pink-100 text-gray-700 hover:text-pink-700 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="sr-only"
                          onChange={() => addToFavorites(joke)}
                        />
                        <div className="group-hover:scale-110 transition-transform">
                          <FaHeart />
                        </div>
                        <span className="text-sm font-medium">Save</span>
                      </label>
                    </div>

                    <div className="text-xs text-gray-400 font-medium">
                      #{index + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Show More Button */}
          {visibleJokesCount < jokes.length && (
            <div className="mt-12 text-center">
              <button
                onClick={handleShowMore}
                className={`group relative ${
                  categories.find(
                    (category) => category.name === selectedCategory
                  )?.color
                } text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
              >
                <div className="flex items-center space-x-3">
                  <span>Show More Jokes</span>
                  <div className="group-hover:translate-y-1 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              <p className="text-gray-500 mt-4 text-sm">
                Showing {Math.min(visibleJokesCount, jokes.length)} of{" "}
                {jokes.length} jokes
              </p>
            </div>
          )}

          {/* End state message */}
          {visibleJokesCount >= jokes.length && jokes.length > 0 && (
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-dashed border-green-200">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  You've seen all the jokes in this category!
                </h3>
                <p className="text-gray-500">
                  Try exploring other categories for more programming humor.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default JokeCategories;
