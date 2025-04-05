import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Loading from './components/Loading';
import { enableProtection } from './utils/protection';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Enable protection against copying and screenshots
    enableProtection();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Enable scrolling after a short delay
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 500);
  };

  return (
    <div className="min-h-screen bg-primary cursor-none">
      <CustomCursor />
      
      {/* Loading Screen - Fixed Position */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
          >
            <Loading onComplete={handleLoadingComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`${isLoading ? 'pointer-events-none' : ''}`}
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
            <Projects />
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
}

export default App;
