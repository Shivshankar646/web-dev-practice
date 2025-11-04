function Card({ title, description, image }) {
  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <img src={image} alt="card" className="rounded-lg mb-3" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default Card;
