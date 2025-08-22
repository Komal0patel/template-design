// CardSlider.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CardSlider = ({ data, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, interval);

    return () => clearInterval(timer);
  }, [data.length, interval]);

  return (
    <div className="relative w-full max-w-3xl h-[60vh] sm:h-[400px] overflow-hidden mx-auto px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full bg-white/10 backdrop-blur-lg rounded-xl shadow-lg flex flex-col items-center justify-center p-6"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Image */}
          <img
            src={data[currentIndex].image}
            alt={data[currentIndex].title}
            className="w-full h-48 sm:h-60 object-cover rounded-lg mb-4"
          />

          {/* Title & description */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-center">
            {data[currentIndex].title}
          </h2>
          <p className="text-sm sm:text-base text-center">
            {data[currentIndex].description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CardSlider;
