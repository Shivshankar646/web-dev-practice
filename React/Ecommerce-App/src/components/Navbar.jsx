import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import cartIcon from '../assets/cart_icon.png';



function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <Link to="/" className="text-xl font-bold">MyStore</Link>

        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/products" className="hover:text-yellow-400">Products</Link></li>
         <li className="relative">
  <Link to="/cart" className="flex items-center">
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
