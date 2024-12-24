import React from "react";

function FeaturedJokes() {
  const featuredJokes = [
    {
      id: 1,
      joke: "I told my computer I needed a break, and now it won't stop sending me KitKats.",
    },
    {
      id: 2,
      joke: "Why do programmers hate romantic comedies? They prefer their code DRY, not WET.",
    },
    {
      id: 3,
      joke: "My SQL query walked into a bar and saw two tables. It asked, 'Mind if I join you?'",
    },
    {
      id: 4,
      joke: "I tried to start a band with a bunch of developers, but we couldn’t sync our Git.",
    },
    {
      id: 5,
      joke: "I once made a belt out of HTML and CSS. It was a huge waste of space.",
    },
    { id: 6, joke: "Why was the computer cold? It left its Windows open." },
    {
      id: 7,
      joke: "What do you call a programmer in a shower? A developer in debug mode.",
    },
    {
      id: 8,
      joke: "Why did the developer stay single? He had too many unresolved dependencies.",
    },
    {
      id: 9,
      joke: "My code is like a good joke—nobody gets it on the first try.",
    },
    {
      id: 10,
      joke: "I accidentally used 'delete' instead of 'break' at a party. Now my friend group is gone.",
    },
    {
      id: 11,
      joke: "The cloud isn’t a mystery—it’s just someone else’s computer.",
    },
    {
      id: 12,
      joke: "Why don’t programmers use the word 'love'? Because it’s too close to 'null'.",
    },
    {
      id: 13,
      joke: "I wrote a bot to tell me programming jokes, but now it just loops the same one. Guess it’s stuck in recursion.",
    },
    {
      id: 14,
      joke: "Why don’t developers trust atoms? Because they make up everything... including my 'if' conditions.",
    },
    {
      id: 15,
      joke: "What’s a programmer’s favorite type of music? Algo-rhythms!",
    },
    {
      id: 16,
      joke: "Why did the programmer break up with their partner? Too much Java, not enough Script.",
    },
    {
      id: 17,
      joke: "I told my boss I’m writing code to improve morale. He said, 'Make sure it’s uplifting!' So I wrote a script to print 'You’re amazing!' every 10 seconds.",
    },
    {
      id: 18,
      joke: "Why did the keyboard get promoted? It always had the right keys to success.",
    },
    {
      id: 19,
      joke: "How does a programmer stay in shape? They run their code.",
    },
    {
      id: 20,
      joke: "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    },
  ];

  // Get the joke based on the current date
  const currentDate = new Date();
  const jokeIndex = (currentDate.getDate() % featuredJokes.length) - 1;
  const todaysJoke =
    featuredJokes[jokeIndex >= 0 ? jokeIndex : featuredJokes.length - 1];

  return (
    <div className="featured-jokes-container mx-6 my-[4rem] py-8">
      <h2 className="text-3xl text-center my-[3rem] underline underline-offset-2">Featured Joke of The Day</h2>
      <div className="flex justify-center items-center">
        <div className="p-10 bg-white rounded-lg shadow-lg max-w-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <blockquote className="text-3xl italic font-semibold text-gray-700">
            "{todaysJoke.joke}"
          </blockquote>
          <footer className="mt-4 text-gray-500">
            — Featured Joke of the Day
          </footer>
        </div>
      </div>
    </div>
  );
}

export default FeaturedJokes;
