import { useParams } from "react-router-dom";

function ProductDetails({ product }) {
  const { id } = useParams();

  console.log(product)

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Product Details - ID: {id}</h2>
      <p>We will fetch product details tomorrow!</p>
    </div>
  );
}

export default ProductDetails;
