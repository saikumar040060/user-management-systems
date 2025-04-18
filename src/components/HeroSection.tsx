import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-background" />
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Transform Your Driving Experience
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Augmented reality navigation designed for safety and convenience
        </motion.p>

        <motion.div 
          className="cta-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/register" className="cta-primary">
            Get Started
          </Link>
          <Link to="/demo" className="cta-secondary">
            Live Demo
          </Link>
        </motion.div>

        <div className="trust-badges">
          <div className="rating">
            ★★★★★ <span>4.9/5</span>
          </div>
          <div className="trust-text">
            Trusted by 50,000+ drivers worldwide
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <img
          src="/ar-windshield-display.png"
          alt="AR windshield display showing navigation"
          loading="eager"
        />
      </motion.div>
    </section>
  );
};

export default Hero;