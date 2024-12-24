import React, { useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState("Python Jokes");
  const [visibleJokesCount, setVisibleJokesCount] = useState(3); // Track the number of visible jokes

  // Function to get jokes for the selected category
  const getJokesForCategory = (category) => {
    const categoryData = JokeData.find((data) => data.category === category);
    return categoryData ? categoryData.jokes : [];
  };

  // Get the jokes for the selected category
  const jokes = getJokesForCategory(selectedCategory);

  // Show the next set of jokes
  const handleShowMore = () => {
    setVisibleJokesCount((prevCount) => prevCount + 3); // Increase by 3
  };

  return (
    <>
      <Navbar />
      <div className="p-6 min-h-screen">
        {/* Category Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`py-4 px-4 text-lg flex items-center space-x-2 rounded hover:opacity-90 ${
                selectedCategory === category.name
                  ? `${category.color} text-white`
                  : "bg-gray-200 text-gray-500"
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Display Jokes for the selected category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jokes.slice(0, visibleJokesCount).map((joke, index) => (
            <div
              key={index}
              className="p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-lg shadow-xl transform transition duration-300 hover:scale-105"
            >
              <p>{joke}</p>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleJokesCount < jokes.length && (
          <div className="mt-6 text-center">
            <button
              onClick={handleShowMore}
              className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
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
