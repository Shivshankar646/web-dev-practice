import { createContext, useState, useContext } from "react";

// 1️⃣ Create Context
const ThemeContext = createContext();

// 2️⃣ Create a Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Toggle light/dark mode
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3️⃣ Custom Hook (optional, just for clean use)
export function useTheme() {
  return useContext(ThemeContext);
}
