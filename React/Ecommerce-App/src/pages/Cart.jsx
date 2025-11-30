import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function Cart() {
 
  const { cart, setCart } = useContext(CartContext);

  function removeFromCart(id) {
  setCart(cart.filter(item => item.id !== id));
}


  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
        <div key={index} className="flex items-center justify-between mb-4 border p-3 rounded">
  <div className="flex items-center gap-4">
    <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
    <div>
      <h3 className="font-semibold">{item.title}</h3>
      <p className="text-green-600 font-bold">${item.price}</p>
      <p>Qty: {item.quantity}</p>
    </div>
  </div>

  <button
    onClick={() => removeFromCart(item.id)}
    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
  >
    Remove
  </button>
</div>

          
        ))
      )}
      
    </div>
  );
}

export default Cart;
