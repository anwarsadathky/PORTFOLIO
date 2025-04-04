import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaPhone } from 'react-icons/fa6';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    emailjs.init("XiwtRY__OgBds9r5a");
  }, []);

  // Reset status message after 3 seconds
  useEffect(() => {
    let progressInterval;
    let timeout;

    if (submitStatus.message) {
      const startTime = Date.now();
      const duration = 3000; // 3 seconds

      progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, 100 * (1 - elapsed / duration));
        setProgress(remaining);
      }, 10);

      timeout = setTimeout(() => {
        setSubmitStatus({ type: '', message: '' });
        setProgress(100);
      }, duration);
    }

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, [submitStatus.message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Add current date and time
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'long',
    });

    try {
      const result = await emailjs.sendForm(
        'service_8zv2kb9',
        'template_k087tr3',
        form.current,
        'XiwtRY__OgBds9r5a'
      );

      // Add the date to the form before sending
      const dateInput = document.createElement('input');
      dateInput.type = 'hidden';
      dateInput.name = 'date';
      dateInput.value = formattedDate;
      form.current.appendChild(dateInput);

      if (result.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        form.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading">Get In Touch</h2>
          <p className="subheading">Let's create something amazing together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-secondary/5 rounded-2xl backdrop-blur-sm -z-10" />
            <form ref={form} onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl">
              <div>
                <label htmlFor="user_name" className="block text-secondary font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="w-full px-4 py-3 bg-primary/30 border-2 border-secondary/20 rounded-lg focus:outline-none focus:border-secondary text-textPrimary transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-secondary font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="w-full px-4 py-3 bg-primary/30 border-2 border-secondary/20 rounded-lg focus:outline-none focus:border-secondary text-textPrimary transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-secondary font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-primary/30 border-2 border-secondary/20 rounded-lg focus:outline-none focus:border-secondary text-textPrimary transition-colors duration-300"
                  required
                ></textarea>
              </div>

              <AnimatePresence mode="wait">
                {submitStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="relative"
                  >
                    {/* Progress bar */}
                    <motion.div
                      className="absolute top-0 left-0 h-1 bg-secondary/50"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                    
                    {/* Status message */}
                    <div className={`p-4 rounded-lg mt-1 ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-500/10 text-green-500' 
                        : 'bg-red-500/10 text-red-500'
                    }`}>
                      {submitStatus.message}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-secondary/10 text-secondary border-2 border-secondary px-8 py-4 rounded-lg transition-all duration-300 font-medium ${
                  isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-secondary/20'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-12"
          >
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-secondary mb-4">Let's Connect</h3>
              <p className="text-textSecondary text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>
            
            <div className="space-y-6 w-full">
              <motion.a
                href="mailto:anwarsadathky789@gmail.com"
                className="flex items-center space-x-4 text-textSecondary hover:text-secondary transition-all duration-300 group p-4 rounded-lg hover:bg-secondary/5"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors duration-300">
                  <FaEnvelope size={20} />
                </div>
                <span className="font-medium">anwarsadathky789@gmail.com</span>
              </motion.a>
              
              <motion.a
                href="tel:+918590582088"
                className="flex items-center space-x-4 text-textSecondary hover:text-secondary transition-all duration-300 group p-4 rounded-lg hover:bg-secondary/5"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors duration-300">
                  <FaPhone size={20} />
                </div>
                <span className="font-medium">+91 859 058 2088</span>
              </motion.a>
            </div>

            <div className="flex justify-center md:justify-start space-x-8">
              <motion.a
                href="https://github.com/anwarsadathky"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-secondary/5 rounded-full text-textSecondary hover:text-secondary hover:bg-secondary/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/anwar-sadath-k-y-b77314288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-secondary/5 rounded-full text-textSecondary hover:text-secondary hover:bg-secondary/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://x.com/anwarsadathky11?t=IOe67jk0CtownghTUpQTiQ&s=03"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-secondary/5 rounded-full text-textSecondary hover:text-secondary hover:bg-secondary/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaXTwitter size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 