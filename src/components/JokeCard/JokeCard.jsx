import React, { useState } from "react";

function JokeCard() {
  const [joke, setJoke] = useState({});
  const [visibleCard, setVisibleCard] = useState("single"); 

  const emojis = ["😂", "🤣", "😆", "😹", "😜", "🤪", "😝", "😛", "😄", "😁", "😅", "😇", "😉", "😊", "😋", "😎", "😍", "😘", "😗", "😙"];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const urlSingle = `https://v2.jokeapi.dev/joke/Programming?type=single`;
  const urlTwoPart = `https://v2.jokeapi.dev/joke/Programming?type=twopart`;


  const fetchJoke = (type) => {
    const url = type === "single" ? urlSingle : urlTwoPart;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
        setVisibleCard(type); 
      });
  };

  return (
    <div className="joke-container my-[3rem] flex flex-col items-center gap-6 mx-6">
     
      <div className="btn-container flex gap-4 mb-10">
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

    
      {visibleCard === "single" && joke.joke && (
        <div className="joke-card  bg-white border border-custom-gradient p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-700 ease-in-out hover:scale-110 hover:bg-gray-100">
          <p className="joke-single text-[1.5rem] text-center">{joke.joke}
          <span className="text-[1.5rem] ">{randomEmoji}</span>
          </p>
          
        </div>
      )}

   
      {visibleCard === "twopart" && joke.setup && joke.delivery && (
        <div className="joke-card bg-white border border-custom-gradient  p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-700 ease-in-out hover:scale-110 hover:bg-gray-100">
          <p className="joke-setup font-bold text-2xl text-gray-800 text-center mb-4">
            {joke.setup}
          </p>
          <p className="joke-punchline text-xl text-gray-600 text-center">
            {joke.delivery} <span className="text-xl">{randomEmoji}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default JokeCard;
