import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import { CartProvider } from "./context/CartContext";
import Wishlist from "./pages/Wishlist";
import Footer from './components/Footer';




const App = () => {
  return (
    <CartProvider>

<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/cart' element={<Cart/>} />
  <Route path='/products' element={<Products/>} />
  <Route path='/products/:id' element={<ProductDetails/>} />
  <Route path="/wishlist" element={<Wishlist />} />
</Routes>
<Footer />
</BrowserRouter>
 </CartProvider>
  )
}

export default App
