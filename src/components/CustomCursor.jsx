import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [touchActive, setTouchActive] = useState(false);

  const cursorX = useSpring(0, { stiffness: 1000, damping: 50 });
  const cursorY = useSpring(0, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    // Mouse event handlers
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    // Touch event handlers
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      cursorX.set(touch.clientX);
      cursorY.set(touch.clientY);
      setVisible(true);
      setTouchActive(true);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      cursorX.set(touch.clientX);
      cursorY.set(touch.clientY);
      setVisible(true);
    };

    const handleTouchEnd = () => {
      setTouchActive(false);
      // Keep cursor visible for a moment after touch
      setTimeout(() => {
        if (!touchActive) {
          setVisible(false);
        }
      }, 150);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      // Remove event listeners
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [cursorX, cursorY, touchActive]);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      animate={{
        opacity: visible ? 1 : 0,
        scale: touchActive ? 1.5 : 1,
      }}
      transition={{
        opacity: { duration: 0.2 },
        scale: { duration: 0.15 }
      }}
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      {/* Outer circle */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={{
          scale: touchActive ? 1.2 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute w-8 h-8 border-2 border-secondary rounded-full" />
        
        {/* Inner dot */}
        <motion.div
          className="w-2 h-2 bg-secondary rounded-full"
          animate={{
            scale: touchActive ? 1.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor; 