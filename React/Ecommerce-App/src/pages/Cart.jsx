import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity,removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
  <div className="p-4 max-w-4xl mx-auto">

    <h2 className="text-3xl font-bold mb-6 text-center">Your Cart 🛒</h2>

    {cart.length === 0 ? (
      <div className="text-center">
        <p>Your cart is empty 🥹</p>
        <Link to="/products" className="text-blue-600 font-semibold inline-block mt-4">
          Continue Shopping →
        </Link>
      </div>
    ) : (
      <>
        {cart.map((item, index) => (
          <div key={index} className="flex items-center gap-4 border rounded p-3 mb-4 shadow">

            <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />

            <div className="flex-1">
              <h3 className="font-semibold line-clamp-1">{item.title}</h3>
              <p className="text-green-600 font-bold">${item.price}</p>

              <div className="flex items-center gap-2 mt-2">
                <button onClick={() => decreaseQuantity(item.id)} className="px-2 bg-gray-300 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="px-2 bg-gray-300 rounded">+</button>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Remove
            </button>

          </div>
        ))}

        <div className="text-right mt-6 font-bold text-xl">
          Total: ${totalPrice.toFixed(2)}
        </div>

        <div className="text-center mt-4">
          <Link to="/products" className="text-blue-600 font-semibold">
            Continue Shopping →
          </Link>
        </div>
      </>
    )}
  </div>
);

}

export default Cart;
