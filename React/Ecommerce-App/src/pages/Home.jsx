import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import SkeletonCard from "../components/SkeletonCard";
function Home() {
  const { products } = useContext(CartContext);

  const featured = products.slice(0, 3);

  return (
    <div className="p-4">

      {/* Hero Banner */}
     <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-12 rounded-lg text-center mb-10">
  <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-wide">
    Big Sale is Live 🛍️
  </h2>
  <p className="text-lg mb-6 opacity-90">
    Grab the best deals before they are gone!
  </p>

  <Link
    to="/products"
    className="bg-yellow-400 text-black px-8 py-3 rounded-lg text-lg font-bold hover:bg-yellow-300 transition"
  >
    Shop Now
  </Link>
</div>


      {/* Featured Section */}
      <h3 className="text-2xl font-bold mb-4">Featured Products</h3>

     {featured.length === 0 ? (
 <div className="flex justify-center">
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-6xl">
    {Array(3).fill().map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
</div>

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
