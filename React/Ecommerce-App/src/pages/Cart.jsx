import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity,removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-4 border p-3 rounded"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 object-contain"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-green-600 font-bold">${item.price}</p>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity <= 1}
                      className={`px-2 rounded ${
                        item.quantity <= 1
                          ? "bg-gray-200 text-gray-400"
                          : "bg-gray-300"
                      }`}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </div>
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

          {/* ⭐ TOTAL PRICE SECTION */}
          <div className="text-right mt-6">
            <h3 className="text-xl font-bold">
              Total Price: ${totalPrice.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
