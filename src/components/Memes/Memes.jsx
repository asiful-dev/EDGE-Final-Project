import React from "react";

const memeImages = [
  "/Images/Memes/5-lines-of-code.jpg",
  "/Images/Memes/Chat-GPT-programming-language.jpg",
  "/Images/Memes/dont-break-my-code.jpg",
  "/Images/Memes/It-was-me.jpg",
  "/Images/Memes/Understanding-code.jpg",
  "/Images/Memes/python_snake.jpeg",
  "/Images/Memes/Railway.jpg",
  "/Images/Memes/See-what-sticks.jpg",
  "/Images/Memes/The-bell-curve.jpg",
  "/Images/Memes/Violence.jpg",
];

function Memes() {
  return (
    <div className="my-16 mx-6">
      {/* Enhanced Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Programming <span className="text-orange-500">Memes</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Because debugging is easier when you're laughing 😄
        </p>
      </div>

      {/* Memes Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {memeImages.map((image, index) => (
            <div
              key={index}
              className="group break-inside-avoid bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt={`Programming Meme ${index + 1}`}
                  className="w-full h-auto cursor-pointer group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-3 shadow-lg">
                      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meme Footer */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-medium">
                    Meme #{index + 1}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <span className="text-xs">Click to view</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Stats Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 max-w-4xl mx-auto border border-orange-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{memeImages.length}</div>
              <div className="text-gray-600 font-medium">Memes</div>
              <div className="text-sm text-gray-500">Of pure coding humor</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
              <div className="text-gray-600 font-medium">Laughs</div>
              <div className="text-sm text-gray-500">Guaranteed per view</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Relatable</div>
              <div className="text-sm text-gray-500">For every developer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom message */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-2 text-gray-400 text-sm bg-gray-50 px-4 py-2 rounded-full">
          <span>😂</span>
          <span>Sharing the pain, one meme at a time</span>
          <span>💻</span>
        </div>
      </div>
    </div>
  );
}

export default Memes;