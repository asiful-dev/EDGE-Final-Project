import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
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
    if (navigator.share) {
      navigator.share({
        title: "Funny Joke",
        text:
          visibleCard === "single"
            ? joke.joke
            : `${joke.setup} - ${joke.delivery}`,
      });
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="joke-container my-[3rem] flex flex-col items-center gap-6 mx-6">
        <div className="btn-container flex flex-col gap-4 mb-10 md:flex-row">
          <button
            onClick={() => fetchJoke("single")}
            className="btn bg-custom-gradient text-white font-semibold px-6 py-3 rounded-lg text-[1.5rem] transition-all duration-500 hover:bg-custom-gradient-hover hover:scale-105"
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
            <div className="mt-6 flex gap-4 justify-end">
              <button onClick={shareJoke} className="text-3xl hover:scale-110 ">
                🔗
              </button>
              <label className="text-3xl hover:scale-110 ">
                <input
                  type="checkbox"
                  checked={isFavorite}
                  onChange={toggleFavorite}
                  className="hidden"
                />
                💗
              </label>
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
            <div className="mt-6 flex gap-4 justify-end">
              <button onClick={shareJoke} className="text-3xl hover:scale-110 ">
                🔗
              </button>
              <label className="text-3xl hover:scale-110 ">
                <input
                  type="checkbox"
                  checked={isFavorite}
                  onChange={toggleFavorite}
                  className="hidden"
                />
                💗
              </label>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default JokeCard;
