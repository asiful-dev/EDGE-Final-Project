import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { FaLink } from "react-icons/fa";
function JokeCard() {
  const [joke, setJoke] = useState({});
  const [visibleCard, setVisibleCard] = useState("single");
  const [isFavorite, setIsFavorite] = useState(false);

  const emojis = [
    "😂",
    "🤣",
    "😆",
    "😹",
    "😜",
    "🤪",
    "😝",
    "😛",
    "😄",
    "😁",
    "😅",
    "😇",
    "😉",
    "😊",
    "😋",
    "😎",
    "😍",
    "😘",
    "😗",
    "😙",
  ];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  const urlSingle = "https://v2.jokeapi.dev/joke/Programming?type=single";
  const urlTwoPart = "https://v2.jokeapi.dev/joke/Programming?type=twopart";

  const fetchJoke = (type) => {
    const url = type === "single" ? urlSingle : urlTwoPart;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
        setVisibleCard(type);
        setIsFavorite(checkIfFavorite(data));
      });
  };

  const checkIfFavorite = (joke) => {
    const tempFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    // console.log(tempFavorites);
    // console.log(tempFavorites[0].id);

    tempFavorites.forEach((tempFavorite) => {
      if (tempFavorite.id === joke.id) {
        console.log("Yes");
        return false;
      }
    });
    console.log("No");
    return true;
  };

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log("Before toggleFavorite", favorites);

    const isAlreadyFavorite = checkIfFavorite(joke);

    if (isAlreadyFavorite) {
      const newFavorites = favorites.filter(
        (fav) => JSON.stringify(fav) !== JSON.stringify(joke)
      );
      console.log("newFavorites", newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      favorites.push(joke);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    console.log("After toggleFavorite", favorites);
    setIsFavorite(!isAlreadyFavorite);
  };

  const shareJoke = () => {
    navigator.share({
      title: "Funny Joke",
      text:
        visibleCard === "single"
          ? joke.joke
          : `${joke.setup} - ${joke.delivery}`,
    });
  };
  const addToFavorites = (joke) => {
    // Get the existing favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem("Favorites")) || [];

    // Create a new favorite joke object with additional properties
    const newFavorite = {
      id: joke.id,
      joke: joke.joke || joke.setup + " - " + joke.delivery, // Handle both single and two-part jokes
      category: "Random Joke", // You can adjust the category as per the joke type or other criteria
      timeAdded: new Date().toISOString(), // Add the time when the joke was added
    };
    favorites.push(newFavorite);
    localStorage.setItem("Favorites", JSON.stringify(favorites));
    
  };

  return (
    <>
      <Navbar />
      <div className="introduction m-6 p-6 rounded-lg shadow-lg text-center transform transition-all duration-1000 ease-in-out animate-fadeIn">
        <div className="intro-txt">
          <h2 className="text-3xl font-extrabold mb-6  animate__fadeIn">
            Need a laugh? 🤔 We've got you covered! 😆
          </h2>
          <p className="text-lg  mb-4 animate__fadeIn animate-delay-500">
            Whether you're in the mood for a{" "}
            <span className="font-semibold">quick one-liner</span> that'll make
            you smile instantly, or you're feeling adventurous and want to dive
            into a <span className="font-semibold">two-part joke</span> that'll
            have you rolling on the floor,{" "}
            <span className="font-bold text-yellow-400">
              we've got something for every humor level!
            </span>
          </p>
          <p className="text-md  animate__fadeIn animate-delay-1000">
            Ready to laugh? Just hit one of the buttons below, and let the jokes
            choose you! Or, you know, choose wisely... but no pressure! 😜
          </p>
        </div>
      </div>

      <div className="joke-container my-[3rem] flex flex-col items-center gap-6 mx-6">
        <div className="btn-container flex flex-col gap-4 mb-10 md:flex-row">
          <button
            onClick={() => fetchJoke("single")}
            className="btn text-white bg-custom-gradient  font-semibold px-6 py-3 rounded-lg text-[1.5rem] transition-all duration-500 hover:bg-custom-gradient-hover hover:scale-105"
          >
            Get Single Part Joke
          </button>
          <button
            onClick={() => fetchJoke("twopart")}
            className="btn bg-custom-gradient-hover text-white font-semibold px-6 py-3 rounded-lg text-[1.5rem] transition-all duration-500 hover:bg-custom-gradient hover:scale-105"
          >
            Get Two Part Joke
          </button>
        </div>

        {/* Single Part Joke Card */}
        {visibleCard === "single" && joke.joke && (
          <div className="joke-card bg-white border border-custom-gradient p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-700 ease-in-out hover:bg-gray-100 relative">
            <p className="joke-single text-[1.5rem] text-center">
              {joke.joke} <span className="text-[1.5rem]">{randomEmoji}</span>
            </p>
            <div className="btns-container flex gap-8 mt-6 text-xl">
              <div className="tooltip tooltip-bottom" data-tip="Share">
                <button onClick={() => shareJoke(joke)}>
                  <FaLink />
                </button>
              </div>
              <div
                className="tooltip tooltip-bottom"
                data-tip="Add to favorites"
              >
                <input
                  type="checkbox"
                  className="checkbox border-pink-600 [--chkbg:theme(colors.pink.500)] [--chkfg:white] checked:border-none"
                  onChange={() => addToFavorites(joke)}
                />
              </div>
            </div>
          </div>
        )}

        {/* Two Part Joke Card */}
        {visibleCard === "twopart" && joke.setup && joke.delivery && (
          <div className="joke-card bg-white border border-custom-gradient py-[2rem] px-[3rem] rounded-lg shadow-lg hover:shadow-xl transition-all duration-700 ease-in-out hover:bg-gray-100">
            <p className="joke-setup font-bold text-[2rem] text-gray-800 text-center mb-4">
              {joke.setup}
            </p>
            <p className="joke-punchline text-[1.5rem] text-gray-600 text-center">
              {joke.delivery} <span className="text-2xl">{randomEmoji}</span>
            </p>
            <div className="btns-container flex justify-end gap-8 mt-6 text-xl">
              <div className="tooltip tooltip-bottom" data-tip="Share">
                <button onClick={() => shareJoke(joke)}>
                  <FaLink />
                </button>
              </div>
              <div
                className="tooltip tooltip-bottom"
                data-tip="Add to favorites"
              >
                <input
                  type="checkbox"
                  className="checkbox border-pink-600 [--chkbg:theme(colors.pink.500)] [--chkfg:white] checked:border-none"
                  onChange={() => addToFavorites(joke)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default JokeCard;
