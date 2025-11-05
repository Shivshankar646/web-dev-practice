import { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
                    bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-all">
      <h1 className="text-4xl font-bold mb-4">Dark Mode Toggle 🌗</h1>
      <p className="mb-6">Switch between light and dark themes using Tailwind!</p>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-6 py-2 bg-blue-500 dark:bg-yellow-400 text-white dark:text-black 
                   rounded-lg shadow-md hover:scale-105 transition-transform"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
