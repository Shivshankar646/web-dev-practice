import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

function Home() {
  const { products } = useContext(CartContext);

  const featured = products.slice(0, 3);

  return (
    <div className="p-4">

      {/* Hero Banner */}
      <div className="bg-blue-600 text-white p-10 rounded-lg text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Welcome to MyStore 🛍️</h2>
        <p className="text-lg mb-6">Shop the best products now!</p>
        <Link to="/products" className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-bold hover:bg-yellow-300">
          Shop Now
        </Link>
      </div>

      {/* Featured Section */}
      <h3 className="text-2xl font-bold mb-4">Featured Products</h3>

      {featured.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <Link to="/products" className="text-blue-600 font-semibold block mt-4">
        View All Products →
      </Link>

    </div>
  );
}

export default Home;
