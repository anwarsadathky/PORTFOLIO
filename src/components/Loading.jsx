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
        <span className="text-6xl font-bold bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent bg-300% animate-gradient">
          A.S.K
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Loading; 