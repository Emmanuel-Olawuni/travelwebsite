// CustomCursor.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css'; // Create a CSS file for styling the cursor

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor hidden md:block"
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
      }}
    >
      {/* Your gradient cursor content */}
    </motion.div>
  );
};

export default CustomCursor;
