import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/NewsLetter.css';

const NewsLetter = () => {
  const [showA, setShowA] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setShowA(true);
    setTimeout(() => setShowA(false), 3000);
  };

  return (
    <motion.div className="newsletter-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>📩 Subscribe to PulsePress</h2>
      <h4>Get a weekly digest of top stories in your inbox.</h4>

      <form className='newsletter-form'>
        <input
          type='email'
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
        >
          Subscribe
        </motion.button>
      </form>

      <AnimatePresence>
        {showA && (
          <motion.div
            className='newsletter-success'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            🎉 Thank you for subscribing! You’ll receive updates soon.
          </motion.div>
        )}
      </AnimatePresence>

      <p className="newsletter-disclaimer">
        We respect your privacy. Read our Privacy Policy.
      </p>
    </motion.div>
  );
};

export default NewsLetter;
