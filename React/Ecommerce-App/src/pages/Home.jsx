import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

function Home() {
  const { cart } = useContext(CartContext); // we will use products later

  return (
    <div className="p-4">

      {/* Hero Banner */}
      <div className="bg-blue-600 text-white p-10 rounded-lg text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Welcome to MyStore 🛍️</h2>
        <p className="text-lg mb-6">Shop the best products at the best prices!</p>
        <Link to="/products" className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-bold hover:bg-yellow-300">
          Shop Now
        </Link>
      </div>

      {/* ⭐ Featured Section */}
      <h3 className="text-2xl font-bold mb-4">Featured Products</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Show first 3 products for now */}
        <ProductCard product={{id:1, title:"Example 1", price:49.99, image:"https://purepng.com/public/uploads/large/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326949yy7yw.png"}} />
        <ProductCard product={{id:2, title:"Example 2", price:39.99, image:"https://purepng.com/public/uploads/large/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326975ia8xr.png"}} />
        <ProductCard product={{id:3, title:"Example 3", price:29.99, image:"https://purepng.com/public/uploads/large/purepng.com-girl-dressclothinggirl-dressfashion-girl-women-dress-cloth-apparel-631522326876jal6q.png"}} />
      </div>

      <Link to="/products" className="text-blue-600 font-semibold block mt-4">
        View All Products →
      </Link>

    </div>
  );
}

export default Home;
