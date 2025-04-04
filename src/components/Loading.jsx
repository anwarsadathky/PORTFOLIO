import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loading = ({ onLoadingComplete }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Disable scrolling during loading
    document.body.style.overflow = 'hidden';

    // Show content after a delay
    const showTimeout = setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Complete loading after content is shown
    const completeTimeout = setTimeout(() => {
      onLoadingComplete();
    }, 2000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onLoadingComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      className="h-full w-full bg-primary flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showContent ? 1 : 0, scale: showContent ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="flex items-center justify-center space-x-2">
          {["A", ".", "S", ".", "K"].map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              initial="hidden"
              animate={showContent ? "visible" : "hidden"}
              className="text-6xl font-bold bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradient 3s ease infinite"
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loading; 