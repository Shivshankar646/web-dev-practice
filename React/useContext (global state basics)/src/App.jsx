import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./context/Footer";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <nav
      className={`flex justify-between items-center p-4 ${
        theme === "light" ? "bg-gray-200" : "bg-gray-800 text-white"
      }`}
    >
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/login" className="hover:underline">
          Login
        </Link>
      </div>

      <div className="flex gap-3 items-center">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded bg-indigo-500 hover:bg-indigo-700 text-white"
        >
          Toggle Theme
        </button>
        {user ? (
          <button
            onClick={logout}
            className="px-3 py-1 rounded bg-red-500 hover:bg-red-700 text-white"
          >
            Logout
          </button>
        ) : null}
      </div>
    </nav>
  );
}

function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
      }`}
    >
      <Navbar />

      <main className="flex-1 flex justify-center items-center p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <AppContent />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}
