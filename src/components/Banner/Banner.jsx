import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Banner() {
  const slides = [
    {
      id: 1,
      animationData: "🤓", 
      heading: "Jokes Overflowed... Again!",
      subheading: "Brace yourself, the jokes are coming... 🤓🍩",
      bgColor: "from-blue-400 to-purple-500",
      textColor: "text-white",
    },
    {
      id: 2,
      animationData: "👽", 
      heading: "Code So Good, It's Alien!",
      subheading: "Even extraterrestrials are jealous of my syntax. 👽🚀💻",
      bgColor: "from-green-400 to-teal-500",
      textColor: "text-white",
    },
    {
      id: 3,
      animationData: "🦉", 
      heading: "Owls Don't Sleep, They Code!",
      subheading: "Just like that one function you wrote that NEVER works... 🦉🤖",
      bgColor: "from-orange-400 to-red-500",
      textColor: "text-white",
    },
    {
      id: 4,
      animationData: "📋", 
      heading: "Ctrl + C, Ctrl + V... My Code is That Good!",
      subheading: "I write it once, the universe copies it. 📋✨",
      bgColor: "from-purple-400 to-pink-500",
      textColor: "text-white",
    },
  ];

  const [idx, setIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = (id) => {
    const slideIndex = slides.findIndex((slide) => slide.id === id);
    if (slideIndex !== idx) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIdx(slideIndex);
        setIsTransitioning(false);
      }, 150);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIdx((prevIdx) => (prevIdx + 1) % slides.length);
        setIsTransitioning(false);
      }, 150);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[idx];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSlide.bgColor} transition-all duration-1000 ease-in-out`}>
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-4 h-4 bg-white bg-opacity-20 rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-6 h-6 bg-white bg-opacity-15 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-white bg-opacity-25 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-32 right-1/3 w-5 h-5 bg-white bg-opacity-20 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-white bg-opacity-30 rounded-full animate-bounce delay-700"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className={`flex-1 text-center lg:text-left ${currentSlide.textColor}`}>
            <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white border-opacity-30">
                  ✨ Developer Humor Hub
                </span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {currentSlide.heading}
              </h1>
              
              {/* Subheading */}
              <p className="text-xl md:text-2xl text-white text-opacity-90 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                {currentSlide.subheading}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/randomjoke" className="bg-white text-gray-800 font-bold py-4 px-8 rounded-2xl hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Random Joke 🎲
                </Link>
                <Link to="/categories" className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105">
                  Browse Categories 📂
                </Link>
              </div>
            </div>
          </div>

          {/* Animation/Visual Content */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 transform scale-95 rotate-6' : 'opacity-100 transform scale-100 rotate-0'}`}>
              <div className="relative">
                {/* Main Animation Container */}
                <div className="w-80 h-80 md:w-96 md:h-96 bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white border-opacity-20 shadow-2xl">
                  <div className="text-9xl animate-bounce">
                    {currentSlide.animationData}
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-3xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex items-center space-x-3 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full border border-white border-opacity-30">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(slide.id)}
              className={`transition-all duration-300 rounded-full ${
                slide.id === slides[idx].id
                  ? "w-8 h-3 bg-white shadow-lg"
                  : "w-3 h-3 bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white bg-opacity-20">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{
            width: `${((idx + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
}

export default Banner;