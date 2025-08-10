import React from "react";

function FunnyFooter() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-12 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Logo Section */}
        <div>
          <div className="bg-gray-700 rounded-full p-3 w-24 h-24 mx-auto flex items-center justify-center mb-3">
            <img
              src="/Images/logo-removebg-preview.png"
              alt="Project Logo"
              className="w-16 h-16"
            />
          </div>
          <h3 className="text-xl font-semibold">Jokes Overflow™</h3>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Your Project Name. All rights ignored, just like our bug reports. 🛠️
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FunnyFooter;