import { motion } from 'framer-motion';
import { getAssetPath } from '../utils/paths';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <p className="text-secondary mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Anwar Sadath KY
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-textSecondary mb-8">
            I build things for the web.
          </h2>
          <p className="text-textSecondary max-w-2xl mb-8">
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently working at Litmus7, I focus on creating accessible, human-centered products.
          </p>
          <motion.a
            href="#contact"
            className="inline-block border-2 border-secondary text-secondary px-8 py-3 rounded-lg hover:bg-secondary/10 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <motion.div
              className="absolute inset-0 rounded-full bg-secondary/20 backdrop-blur-sm"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src={getAssetPath('profile.png')}
              alt="Profile"
              className="w-48 h-48 rounded-full border-4 border-secondary"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 