import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import { CartProvider } from "./context/CartContext";
import Wishlist from "./pages/Wishlist";




const App = () => {
  return (
    <CartProvider>

<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/cart' element={<Cart/>} />
  <Route path='/collection' element={<Collection/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/orders' element={<Orders/>} />
  <Route path='/placeorder' element={<PlaceOrder/>} />
  <Route path='/products' element={<Products/>} />
  <Route path='/products/:id' element={<ProductDetails/>} />
  <Route path="/wishlist" element={<Wishlist />} />

</Routes>

</BrowserRouter>
 </CartProvider>

  
  )
}

export default App
