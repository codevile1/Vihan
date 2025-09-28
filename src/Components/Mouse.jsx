import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(50); // Default size

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      // Increase cursor size when hovering over <a> or <button>
      setSize(e.target.closest("a, button") ? 70 : 50);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 z-40 bg-[#B396CB] shadow-[0_0_40px_#B396CB] rounded-full pointer-events-none mix-blend-difference"
      style={{ width: size, height: size }}
      animate={{ x: position.x - 25, y: position.y - 25 }
    }
  
    />
  );
};

export default MouseFollower;
