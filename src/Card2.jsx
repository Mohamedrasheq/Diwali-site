import React from "react";
import diwaliImage2 from "./assets/diwali2.jpg";
const Card2 = () => {
  // Sample data for 20 cards
  const products = Array(8)
    .fill()
    .map((_, index) => ({
      id: index + 1,
      image: diwaliImage2,
      title: `Product ${index + 1}`,
      description: `Description for Product ${
        index + 1
      }. This is a brief overview of the product's features and benefits.`,
    }));

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-grow flex flex-col items-center text-center">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded transition-colors duration-300 mt-auto">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card2;
