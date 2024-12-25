import React from "react";
import { Link } from "react-router-dom";

function FunnyFooter() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12 px-6">
      <div className="text-center space-y-6">
        {/* Logo Section */}
        <div>
          <img
            src="/src/assets/Images/logo-removebg-preview.png"
            alt="Project Logo"
            className="w-20 h-20 mx-auto"
          />
          <p className="text-sm mt-2">Jokes Overflow™</p>
        </div>

        {/* Fun Text */}
        <p className="text-lg">
          Built with 💻, 🍕, and twice the caffeine since there are two of us.
          ☕☕
        </p>

        {/* Team Humor */}
        <p className="text-sm">
          Developed by two developers
          <Link to={"/developers"}>
            {" "}
            <button className="btn btn-sm">See us</button>
          </Link>
          , united by bugs and late-night debugging sessions. 🐞💡
        </p>

        {/* Additional Fun Text */}
        <p className="text-sm italic">
          “There’s no place like 127.0.0.1.” — A Very Grounded Team 🌍
        </p>
        <p className="text-xs">
          © {new Date().getFullYear()} Your Project Name. All rights ignored,
          just like our bug reports. 🛠️
        </p>
      </div>
    </footer>
  );
}

export default FunnyFooter;
