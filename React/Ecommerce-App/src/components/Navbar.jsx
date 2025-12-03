import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import cartIcon from '../assets/cart_icon.png';

function Navbar() {
  const { cart, wishlist } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold">MyStore</Link>

        {/* HAMBURGER BUTTON - MOBILE ONLY */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* NAV LINKS */}
        <ul
          className={`
            flex-col gap-4 absolute w-full left-0 bg-gray-900 p-4 transition-all duration-300
            ${menuOpen ? "top-16" : "-top-64"}
            md:flex md:static md:flex-row md:gap-6 md:p-0 md:w-auto
          `}
        >

          <li><Link onClick={() => setMenuOpen(false)} to="/" className="hover:text-yellow-400">Home</Link></li>

          <li><Link onClick={() => setMenuOpen(false)} to="/products" className="hover:text-yellow-400">Products</Link></li>

          <li><Link onClick={() => setMenuOpen(false)} to="/wishlist" className="hover:text-yellow-400">Wishlist ({wishlist.length}) ❤️</Link></li>

          {/* CART ICON WITH COUNTER */}
          <li className="relative">
            <Link onClick={() => setMenuOpen(false)} to="/cart" className="flex items-center">
              <div className="relative">
                <img
                  src={cartIcon}
                  className="w-7"
                  alt="cart"
                />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-[1px] rounded-full">
                    {cart.length}
                  </span>
                )}
              </div>
              <span className="ml-2">Cart</span>
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
