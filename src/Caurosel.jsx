import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Carousel = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateRandomPosition = () => ({
    x: Math.random() * windowSize.width,
    y: Math.random() * windowSize.height,
  });

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Floating diyas (lamps) */}
      {[...Array(10)].map((_, index) => {
        const position = generateRandomPosition();
        return (
          <motion.div
            key={index}
            className="absolute w-4 h-4 bg-yellow-300 rounded-full shadow-lg"
            style={{
              top: position.y,
              left: position.x,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        );
      })}

      {/* Content */}
      <div className="container mx-auto h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-yellow-300"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Celebrate Deepavali
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Join us for a spectacular festival of lights. Experience the joy,
            colors, and traditions of Deepavali.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button
              className="px-4 py-2 bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition-colors rounded-full text-sm font-semibold w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Festival Venues
            </motion.button>
            <motion.button
              className="px-4 py-2 bg-yellow-500 text-black hover:bg-yellow-400 transition-colors rounded-full text-sm font-semibold w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Volunteer With Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated fireworks */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="firework"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[...Array(5)].map((_, index) => {
          const position = generateRandomPosition();
          return (
            <motion.circle
              key={index}
              cx={position.x}
              cy={position.y}
              r="0"
              fill="url(#firework)"
              initial={{ opacity: 0 }}
              animate={{
                r: [0, 100],
                opacity: [1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default Carousel;
