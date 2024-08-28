import React, { useState } from "react";
import { motion } from "framer-motion";

const AdBanner = ({ imageUrl, linkUrl, position }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className={`fixed ${position === "left" ? "left-0" : "right-0"} top-36 z-50`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ height: "600px", width: "150px", overflow: "hidden" }}
    >
      <div className="relative h-fit w-fit flex items-center justify-center">
        <button
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1 z-10"
          onClick={toggleVisibility}
        >
          ✕
        </button>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={imageUrl}
            alt="Advertisement"
            className="object-fit h-full w-full"
          />
        </a>
      </div>
    </motion.div>
  );
};

export default AdBanner;
