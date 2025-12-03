import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, toggleWishlist, inWishlist } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <h2 className="p-4 text-xl font-bold">Loading...</h2>;
  }

  const isInWishlist = inWishlist(product.id);

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-72 md:h-96 object-contain"
        />
      </div>

      {/* Product Info */}
      <div>
        <h2 className="text-3xl font-bold mb-3">{product.title}</h2>

        <p className="text-green-600 text-2xl font-bold mb-4">
          ${product.price}
        </p>

        <p className="text-gray-700 mb-4">{product.description}</p>

        <p className="text-sm text-blue-500 mb-4">
          Category: {product.category}
        </p>

        <p className="text-sm text-yellow-500 font-semibold mb-6">
          ⭐ {product.rating?.rate} / 5 ({product.rating?.count} reviews)
        </p>

        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition mb-4"
        >
          Add to Cart
        </button>

        <button
          onClick={() => toggleWishlist(product)}
          className="px-6 py-3 rounded-lg ml-4 border border-gray-500 hover:bg-gray-100 transition"
        >
          {isInWishlist
            ? "❤️ Remove from Wishlist"
            : "🤍 Add to Wishlist"}
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
