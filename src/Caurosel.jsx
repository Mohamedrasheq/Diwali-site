import React from "react";
import diwaliImage from "./assets/diwali1.jpg"; // Adjust the path based on the file structure

const Carousel = () => {
  return (
    <div className="relative w-full h-[500px] bg-black overflow-hidden">
      <div className="container mx-auto h-full flex items-center">
        {/* Left content centered vertically and horizontally */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-white space-y-6 z-10 text-center lg:text-left">
          <h2 className="text-4xl font-bold tracking-tight">
            Celebrate Deepavali
          </h2>
          <p className="text-lg max-w-md">
            Join us for a spectacular festival of lights. Experience the joy,
            colors, and traditions of Deepavali.
          </p>
          <div className="space-x-4 flex justify-center">
            <button className="px-4 py-2 bg-transparent text-white border border-white hover:bg-white hover:text-black transition-colors">
              Festival Venues
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Volunteer With Us
            </button>
          </div>
        </div>
        {/* Image on the right side, only visible on larger screens */}
        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full p-4">
          {" "}
          {/* Added padding */}
          <div className="w-full h-full overflow-hidden">
            <img
              src={diwaliImage} // Use the imported image variable
              alt="Deepavali Celebration"
              className="w-full h-full object-cover" // Ensures image covers the area properly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
