import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <div className="home-container">
      {/* Floating Navbar */}
      <nav className="floating-nav">
        <div className="nav-logo">VRavity</div>
        <div className="nav-links">
          <Link to="/features">Features</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/pricing">Pricing</Link>
        </div>
        <div className="nav-controls">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <Link to="/demo" className="nav-cta">Try Demo</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hero"
      >
        <div className="hero-content">
          <h1>Transform Your Driving Experience</h1>
          <p>Augmented reality navigation designed for safety and convenience</p>
          <div className="cta-buttons">
            <Link to="/register" className="cta-primary">Get Started</Link>
            <Link to="/demo" className="cta-secondary">Live Demo</Link>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/ar-windshield.png" 
            alt="AR Dashboard Preview" 
            loading="lazy"
          />
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="features"
      >
        <h2>Why Choose Our Solution</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="feature-card"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pricing"
      >
        <h2>Simple, Transparent Pricing</h2>
        <div className="pricing-cards">
          {pricingPlans.map(plan => (
            <div key={plan.name} className="pricing-card">
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}<span>/month</span></p>
              <ul>
                {plan.features.map(feat => (
                  <li key={feat}>✓ {feat}</li>
                ))}
              </ul>
              <button className="plan-cta">Get Started</button>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

// Data
const features = [
  {
    icon: '🚗',
    title: 'Real-Time Navigation',
    desc: 'AR overlays on your windshield'
  },
  {
    icon: '⏱️',
    title: 'Time Optimization',
    desc: 'Smart route suggestions'
  },
  {
    icon: '🛡️',
    title: 'Safety Alerts',
    desc: 'Collision warnings in AR'
  },
  {
    icon: '📊',
    title: 'Performance Metrics',
    desc: 'Real-time driving analytics'
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    features: [
      "Basic AR Navigation", 
      "Real-time Traffic",
      "Email Support",
      "3 Devices"
    ]
  },
  {
    name: "Pro",
    price: "$59",
    features: [
      "Advanced AR Features",
      "Priority Support",
      "Family Plan (5 Devices)",
      "Custom Routes"
    ]
  }
];

export default Home;