import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="flex items-center gap-4 mb-4 border p-3 rounded">
            <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-green-600 font-bold">${item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
