import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

function Wishlist() {
  const { wishlist } = useContext(CartContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Wishlist ❤️</h2>

      {wishlist.length === 0 ? (
        <p>No items liked yet</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {wishlist.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
