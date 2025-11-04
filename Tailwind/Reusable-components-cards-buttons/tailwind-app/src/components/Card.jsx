import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden m-6">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
