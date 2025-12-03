import { createContext, useState, useEffect } from "react";


export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

function toggleWishlist(product) {
  const exist = wishlist.find(item => item.id === product.id);

  if (exist) {
    setWishlist(prev => prev.filter(item => item.id !== product.id)); // remove
  } else {
    setWishlist(prev => [...prev, product]); // add
  }
}



  function addToCart(product) {
    const exist = cart.find(item => item.id === product.id);

    if (exist) {
      setCart(prev =>
        prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart(prev => [...prev, { ...product, quantity: 1 }]);
    }
  }

  function increaseQuantity(id) {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }
  function removeFromCart(id) {
  setCart(prev => prev.filter(item => item.id !== id));
}

useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => setProducts(data));
}, []);

function inWishlist(id) {
  return wishlist.some(item => item.id === id);
}


  return (
 <CartContext.Provider value={{
  cart, setCart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart,
  products, wishlist, toggleWishlist,inWishlist
}}>


      {children}
    </CartContext.Provider>
  );
}
