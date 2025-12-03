import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
 const { addToCart, wishlist, toggleWishlist } = useContext(CartContext);

  const { cart } = useContext(CartContext);


const inCart = cart.some(item => item.id === product.id);

const inWishlist = wishlist.some(item => item.id === product.id);


  return (
   <div className="border rounded-lg p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
      <Link to={`/products/${product.id}`} className="flex-1">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-full object-contain mb-3"
        />

        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 mb-2">
          {product.title}
        </h3>

        <p className="text-green-600 font-bold text-lg">
          ${product.price}
        </p>
      </Link>

     <button
  onClick={() => toggleWishlist(product)}
  className="absolute top-2 right-2 text-xl"
>
  {inWishlist ? "❤️" : "🤍"}
</button>


      {/* ⭐ Add to Cart button */}
      <button
  onClick={() => addToCart(product)}
  className={`mt-3 w-full py-2 rounded text-white ${
    inCart ? "bg-green-600" : "bg-black hover:bg-gray-800"
  }`}
  disabled={inCart}
>
  {inCart ? "Added ✓" : "Add to Cart"}
</button>

    </div>
  );
}

export default ProductCard;
