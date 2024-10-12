import React from "react";

const Card1 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[400px]">
      {/* Left Card with Video */}
      <div className="w-full md:w-1/2 bg-black p-4 md:p-8">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/CWYKpwlVGso"
          title="Deepavali Celebration Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Right Card with Content */}
      <div className="w-full md:w-1/2 bg-black text-white p-8 flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl font-bold mb-4 animate-pulse">
          Celebrate Deepavali
        </h2>
        <p className="mb-6 animate-fade-in">
          Experience the festival of lights like never before. Join us in
          celebrating Deepavali with vibrant colors, delicious food, and joyous
          festivities.
        </p>
        <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded hover:bg-yellow-600 transition-colors duration-300 animate-glow">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card1;
