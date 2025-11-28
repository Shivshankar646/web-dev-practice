import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          MyStore
        </Link>

        {/* Navbar Links */}
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/products" className="hover:text-yellow-400">Products</Link></li>
          <li><Link to="/cart" className="hover:text-yellow-400">Cart</Link></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
