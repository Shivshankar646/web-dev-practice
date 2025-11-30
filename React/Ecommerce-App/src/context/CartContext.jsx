import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

function addToCart(product) {
  setCart(prev => {
    const exist = prev.find(item => item.id === product.id);

    if (exist) {
      return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
}


  return (
    <CartContext.Provider value={{ cart,setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
