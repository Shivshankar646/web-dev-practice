import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
        <img src={product.image} alt={product.title} className="h-40 w-full object-contain bg-white rounded-md" />
        <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
        <p className="text-green-600 font-bold">${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
