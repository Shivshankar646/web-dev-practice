import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";

function Products() {
  const { products } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");


const filteredProducts = products.filter(product => {
  const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
  const matchesCategory = category === "all" || product.category === category;
  return matchesSearch && matchesCategory;
});



  return (
    <div className="p-4">
      <input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={e => setSearch(e.target.value)}
  className="border p-2 mb-4 w-full rounded"
  />
 <div className="flex gap-3 mb-4 flex-wrap">
  <button
    onClick={() => setCategory("all")}
    className={`px-3 py-1 rounded ${
      category === "all" ? "bg-black text-white" : "border"
    }`}
  >
    All
  </button>

  <button
    onClick={() => setCategory("men's clothing")}
    className={`px-3 py-1 rounded ${
      category === "men's clothing" ? "bg-black text-white" : "border"
    }`}
  >
    Men's Clothing
  </button>

  <button
    onClick={() => setCategory("women's clothing")}
    className={`px-3 py-1 rounded ${
      category === "women's clothing" ? "bg-black text-white" : "border"
    }`}
  >
    Women's Clothing
  </button>

  <button
    onClick={() => setCategory("jewelery")}
    className={`px-3 py-1 rounded ${
      category === "jewelery" ? "bg-black text-white" : "border"
    }`}
  >
    Jewelery
  </button>

  <button
    onClick={() => setCategory("electronics")}
    className={`px-3 py-1 rounded ${
      category === "electronics" ? "bg-black text-white" : "border"
    }`}
  >
    Electronics
  </button>
</div>



      <h2 className="text-2xl font-bold mb-4">All Products</h2>

     {products.length === 0 ? (
 <div className="flex justify-center">
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
    {Array(6).fill().map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
</div>

) : (

       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
