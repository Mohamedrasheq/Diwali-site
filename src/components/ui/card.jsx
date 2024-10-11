import React from "react";

const CarouselCard = () => {
  return (
    <div className="relative w-full h-[500px] bg-black overflow-hidden">
      <div className="container mx-auto h-full flex items-center">
        <div className="w-full lg:w-1/2 text-white space-y-6 z-10">
          <h2 className="text-4xl font-bold tracking-tight">
            Celebrate Deepavali
          </h2>
          <p className="text-lg max-w-md">
            Join us for a spectacular festival of lights. Experience the joy,
            colors, and traditions of Deepavali.
          </p>
          <div className="space-x-4">
            <button className="px-4 py-2 border border-white text-white bg-transparent rounded hover:bg-white hover:text-black transition-colors">
              Festival Venues
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Volunteer With Us
            </button>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full">
          <div className="w-full h-full overflow-hidden border border-gray-300 rounded-lg">
            <img
              src="/placeholder.svg"
              alt="Deepavali Celebration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
