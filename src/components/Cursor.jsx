import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);

    // Only add mouse move listener if not a touch device
    if (!isTouchDevice) {
      const updatePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      const updateHoverState = (e) => {
        const target = e.target;
        const isHoverable = target.tagName === 'A' || 
                          target.tagName === 'BUTTON' || 
                          target.classList.contains('clickable');
        setIsHovering(isHoverable);
      };

      window.addEventListener('mousemove', updatePosition);
      window.addEventListener('mouseover', updateHoverState);

      return () => {
        window.removeEventListener('mousemove', updatePosition);
        window.removeEventListener('mouseover', updateHoverState);
        window.removeEventListener('resize', checkTouchDevice);
      };
    }

    return () => {
      window.removeEventListener('resize', checkTouchDevice);
    };
  }, [isTouchDevice]);

  // Don't render cursor on touch devices
  if (isTouchDevice) return null;

  return (
    <motion.div
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      animate={{
        x: position.x - 10,
        y: position.y - 10,
      }}
      transition={{
        type: "spring",
        damping: 40,
        stiffness: 300,
        mass: 0.3,
        restDelta: 0.001,
        restSpeed: 0.001
      }}
    />
  );
};

export default Cursor; 