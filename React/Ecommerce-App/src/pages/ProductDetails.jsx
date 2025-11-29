import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) {
    return <h2 className="p-4 text-xl font-bold">Loading...</h2>;
  }

  

  return (
    <div className="p-4 md:flex gap-10 max-w-4xl mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="h-80 w-80 object-contain bg-white rounded-lg border"
      />

      <div className="mt-6 md:mt-0">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-xl text-gray-700" >{product.category}</p>
        <p className="text-xl">Rating: {product.rating.rate}</p>
        <p className="text-xl">Rating given by {product.rating.count} users</p>
        <p className="text-green-600 text-xl font-bold mt-2">${product.price}</p>
        <p className="mt-4 text-gray-700">{product.description}</p>

      <button
  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800"
  onClick={() => addToCart(product)}
>
  Add to Cart
</button>

      </div>
    </div>
  );
}

export default ProductDetails;
