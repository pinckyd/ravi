import React, { useState } from "react";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min- ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyWebsite</h1>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            isDarkMode ? "bg-blue-700" : "bg-blue-200"
          }`}
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome to MyWebsite
          </h1>
          <p className="text-xl">
            Discover the best tools and resources to enhance your productivity
            and creativity.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-lg font-semibold ${
                isDarkMode
                  ? "bg-blue-600 hover:bg-blue-900"
                  : "bg-blue-500 hover:bg-blue-900"
              } text-white`}
            >
              Download Now
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-lg font-semibold ${
                isDarkMode
                  ? "bg-blue-600 hover:bg-blue-900"
                  : "bg-blue-500 hover:bg-blue-900"
              } text-white`}
            >
              Download Now
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://picsum.photos/600/400"
            alt="Placeholder"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Footer */}
      <footer
        className={`p-4 text-center ${
          isDarkMode ? "bg-blue-800" : "bg-blue-100"
        }`}
      >
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
