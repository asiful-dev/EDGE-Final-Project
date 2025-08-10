import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

function JokeCard() {
  const [joke, setJoke] = useState({});
  const [visibleCard, setVisibleCard] = useState("single");
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emojis = [
    "😂", "🤣", "😆", "😹", "😜", "🤪", "😝", "😛", "😄", "😁",
    "😅", "😇", "😉", "😊", "😋", "😎", "😍", "😘", "😗", "😙",
  ];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  const urlSingle = "https://v2.jokeapi.dev/joke/Programming?type=single";
  const urlTwoPart = "https://v2.jokeapi.dev/joke/Programming?type=twopart";

  const fetchJoke = (type) => {
    setIsLoading(true);
    const url = type === "single" ? urlSingle : urlTwoPart;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
        setVisibleCard(type);
        setIsFavorite(checkIfFavorite(data));
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  const checkIfFavorite = (joke) => {
    // Simulate localStorage check with in-memory storage for artifact
    return Math.random() > 0.5;
  };

  const addToFavorites = (joke) => {
    // Simulate adding to favorites
    setIsFavorite(!isFavorite);
  };

  const shareJoke = () => {
    if (navigator.share) {
      navigator.share({
        title: "Funny Programming Joke",
        text: visibleCard === "single" ? joke.joke : `${joke.setup} - ${joke.delivery}`,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard?.writeText(
        visibleCard === "single" ? joke.joke : `${joke.setup} - ${joke.delivery}`
      );
    }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Enhanced Introduction Section */}
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl animate-bounce">😂</div>
          <div className="absolute top-20 right-20 text-4xl animate-pulse">🤣</div>
          <div className="absolute bottom-20 left-1/4 text-5xl animate-bounce delay-1000">😆</div>
          <div className="absolute bottom-10 right-1/3 text-3xl animate-pulse delay-500">😄</div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Need a laugh? 🤔
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Whether you're in the mood for a{" "}
                <span className="font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-lg">
                  quick one-liner
                </span>{" "}
                that'll make you smile instantly, or you're feeling adventurous and want a{" "}
                <span className="font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-lg">
                  two-part joke
                </span>{" "}
                that'll have you rolling on the floor...
              </p>
              <p className="text-lg text-gray-600">
                <span className="font-bold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                  We've got something for every humor level! 🎯
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Button Section */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <button
            onClick={() => fetchJoke("single")}
            disabled={isLoading}
            className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading && visibleCard === "single" ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Loading...</span>
              </div>
            ) : (
              <>
                <span className="relative z-10">🎯 Get Single Joke</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
              </>
            )}
          </button>
          
          <button
            onClick={() => fetchJoke("twopart")}
            disabled={isLoading}
            className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading && visibleCard === "twopart" ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Loading...</span>
              </div>
            ) : (
              <>
                <span className="relative z-10">🎭 Get Two-Part Joke</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
              </>
            )}
          </button>
        </div>

        {/* Enhanced Single Part Joke Card */}
        {visibleCard === "single" && joke.joke && (
          <div className="group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200 overflow-hidden transform hover:-translate-y-2 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2"></div>
            <div className="p-10">
              <div className="flex items-start space-x-4 mb-8">
                <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-3xl">🎯</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-2">
                    Single Joke
                  </h3>
                  <p className="text-2xl text-gray-800 leading-relaxed">
                    {joke.joke}
                  </p>
                </div>
                <div className="text-4xl animate-bounce">
                  {randomEmoji}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex space-x-4">
                  <button
                    onClick={shareJoke}
                    className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    <span className="text-sm font-medium">Share</span>
                  </button>
                  
                  <button
                    onClick={() => addToFavorites(joke)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 ${
                      isFavorite 
                        ? 'bg-pink-100 text-pink-700 hover:bg-pink-200' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <svg className={`w-5 h-5 ${isFavorite ? 'fill-pink-500' : 'fill-none'}`} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm font-medium">
                      {isFavorite ? 'Saved' : 'Save'}
                    </span>
                  </button>
                </div>
                
                <div className="text-xs text-gray-400">
                  ID: {joke.id}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Two Part Joke Card */}
        {visibleCard === "twopart" && joke.setup && joke.delivery && (
          <div className="group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200 overflow-hidden transform hover:-translate-y-2 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2"></div>
            <div className="p-10">
              <div className="flex items-start space-x-4 mb-8">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-3xl">🎭</span>
                </div>
                <div className="flex-grow space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
                      Setup
                    </h3>
                    <p className="text-2xl font-semibold text-gray-800 leading-relaxed">
                      {joke.setup}
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-200 pl-6">
                    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
                      Punchline
                    </h3>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {joke.delivery}
                    </p>
                  </div>
                </div>
                <div className="text-4xl animate-bounce">
                  {randomEmoji}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex space-x-4">
                  <button
                    onClick={shareJoke}
                    className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    <span className="text-sm font-medium">Share</span>
                  </button>
                  
                  <button
                    onClick={() => addToFavorites(joke)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 ${
                      isFavorite 
                        ? 'bg-pink-100 text-pink-700 hover:bg-pink-200' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <svg className={`w-5 h-5 ${isFavorite ? 'fill-pink-500' : 'fill-none'}`} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm font-medium">
                      {isFavorite ? 'Saved' : 'Save'}
                    </span>
                  </button>
                </div>
                
                <div className="text-xs text-gray-400">
                  ID: {joke.id}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        {!joke.joke && !joke.setup && (
          <div className="text-center mt-12">
            <div className="bg-gray-50 rounded-3xl p-12 border-2 border-dashed border-gray-300">
              <div className="text-6xl mb-4">🎪</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                Ready for some laughs?
              </h3>
              <p className="text-gray-500">
                Click one of the buttons above to get started!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default JokeCard;