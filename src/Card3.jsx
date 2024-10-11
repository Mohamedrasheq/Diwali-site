import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import diwaliImage3 from "./assets/diwali3.jpg";
import diwaliImage4 from "./assets/diwali4.jpg";
import diwaliImage5 from "./assets/diwali5.jpg";

const Card3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [diwaliImage3, diwaliImage5, diwaliImage3];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden bg-amber-100 shadow-lg">
      <div className="relative h-64 md:h-96">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-amber-500" : "bg-amber-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Card3;
