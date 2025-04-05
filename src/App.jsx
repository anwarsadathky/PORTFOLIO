import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Loading from './components/Loading';
import CustomCursor from './components/CustomCursor';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Add a small delay before scrolling is enabled
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-primary cursor-none">
      <CustomCursor />
      
      {/* Loading Screen - Fixed Position */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            className="fixed inset-0 z-50"
            exit={{ 
              y: '-100%',
              transition: { 
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96]
              }
            }}
          >
            <Loading onLoadingComplete={handleLoadingComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isLoading ? 0 : 1,
        }}
        transition={{ duration: 0.5 }}
        className="relative"
        style={{ 
          pointerEvents: isLoading ? 'none' : 'auto',
        }}
      >
        <Navbar />
        <main className="overflow-x-hidden">
          <Hero />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <About />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Skills />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Experience />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Contact />
          </motion.div>
        </main>
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-6 text-center text-textSecondary"
        >
          <p>&copy; 2025 A.S.K. All rights reserved.</p>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default App;
