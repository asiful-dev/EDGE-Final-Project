import React from "react";

const programmerQuotes = [
    {
      name: "Linus Torvalds",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Lc3_2018_%28263682303%29_%28cropped%29.jpeg/440px-Lc3_2018_%28263682303%29_%28cropped%29.jpeg",
      quote: "Talk is cheap. Show me the code.",
    },
    {
      name: "Bjarne Stroustrup",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bjarne_Stroustrup_%282013%29.jpg",
      quote:
        "There are only two kinds of programming languages: the ones people complain about and the ones nobody uses.",
    },
    {
      name: "Ada Lovelace",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg",
      quote: "That brain of mine is something more than merely mortal, as time will show.",
    },
    {
      name: "Elon Musk",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/440px-Elon_Musk_Royal_Society_crop.jpg",
      quote: "I think it is possible for ordinary people to choose to be extraordinary.",
    },
    {
      name: "Steve Jobs",
      imgUrl: "https://sourcesofinsight.com/wp-content/uploads/2011/06/Steve-Jobs-2-768x512.jpg",
      quote: "Innovation distinguishes between a leader and a follower.",
    },
    {
      name: "Bill Gates",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bill_Gates%2C_September_2024.jpg/440px-Bill_Gates%2C_September_2024.jpg",
      quote: "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.",
    },
    {
      name: "Guido van Rossum",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Guido-portrait-2014-drc.jpg/440px-Guido-portrait-2014-drc.jpg",
      quote: "Code is read much more often than it is written.",
    },
    {
      name: "Genady Korotkevich",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Korotkevich_ITMO.jpg/800px-Korotkevich_ITMO.jpg",
      quote: "Competitive programming is about solving problems efficiently, both in terms of time and code.",
    },
  ];
  

function FunnyQuotes() {
  return (
    <div className="my-8 mx-6">
      <h2 className="text-center mb-8 text-3xl font-semibold text-gray-500">
        <span className="text-orange-400">Byte-Sized</span> Wisdom
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {programmerQuotes.map((quote, index) => (
          <div
            key={index}
            className="bg-white border-2 shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
          >
            <img
              src={quote.imgUrl}
              alt={quote.name}
              className="rounded-full mx-auto w-24 h-24 object-cover mb-4"
            />
            <h3 className="text-xl text-center font-bold text-gray-700">{quote.name}</h3>
            <p className="mt-4 text-gray-600 text-center italic">"{quote.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FunnyQuotes;
