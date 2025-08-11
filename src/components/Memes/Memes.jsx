import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

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
    <>
      <h2 className="text-center text-3xl font-semibold mb-8">
        Programming <span className="text-orange-400">Memes</span>
      </h2>
      {/* PhotoProvider wraps the entire component */}
      <PhotoProvider>
        <div className="p-6 columns-3xs gap-8">
          {memeImages.map((image, index) => (
            <div
              key={index}
              className="my-6 border-4 p-4 transition-all duration-400 hover:scale-105 hover:shadow-lg"
            >
              {/* Wrap each image in PhotoView for functionality */}
              <PhotoView src={image}>
                <img
                  src={image}
                  alt={`Meme ${index + 1}`}
                  className="w-auto cursor-pointer"
                />
              </PhotoView>
            </div>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
}

export default Memes;