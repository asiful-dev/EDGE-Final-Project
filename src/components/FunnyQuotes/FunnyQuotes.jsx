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
  // New object added below
  {
    name: "Grace Hopper",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper_and_UNIVAC.jpg",
    quote: "The most dangerous phrase in the language is, 'We've always done it this way.'",
  },
];

function FunnyQuotes() {
  return (
    <div className="my-16 mx-6">
      {/* Enhanced Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="text-orange-500">Byte-Sized</span> Wisdom
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Words of wisdom from the legends who shaped our digital world
        </p>
      </div>

      {/* Enhanced Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {programmerQuotes.map((quote, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
          >
            {/* Subtle background accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
            
            {/* Profile Image */}
            <div className="relative mb-6">
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-orange-200 transition-all duration-300">
                <img
                  src={quote.imgUrl}
                  alt={quote.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Name */}
            <h3 className="text-xl font-bold text-gray-800 text-center mb-4 group-hover:text-orange-600 transition-colors duration-300">
              {quote.name}
            </h3>

            {/* Quote */}
            <div className="relative">
              <div className="absolute -top-2 -left-2 text-orange-200 text-4xl font-serif opacity-50">"</div>
              <p className="text-gray-700 text-center italic leading-relaxed pl-4 pr-2 relative z-10">
                {quote.quote}
              </p>
              <div className="absolute -bottom-4 -right-2 text-orange-200 text-4xl font-serif opacity-50 rotate-180">"</div>
            </div>

            {/* Decorative element */}
            <div className="mt-6 flex justify-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decoration */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
          <span>💡</span>
          <span>Inspiring minds, one quote at a time</span>
          <span>💡</span>
        </div>
      </div>
    </div>
  );
}

export default FunnyQuotes;