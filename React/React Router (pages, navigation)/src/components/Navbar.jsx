import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-2xl font-bold">
          <Link to="/">Shiv.dev</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
          <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (visible when menuOpen=true) */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-3">
          <Link to="/" className="block hover:text-yellow-400">Home</Link>
          <Link to="/about" className="block hover:text-yellow-400">About</Link>
          <Link to="/projects" className="block hover:text-yellow-400">Projects</Link>
          <Link to="/contact" className="block hover:text-yellow-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}
