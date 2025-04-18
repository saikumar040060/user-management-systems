import React from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>VRavity</h1>
        <nav className="dashboard-nav">
          <button className="active">Dashboard</button>
          <button>Orders</button>
          <button>Settings</button>
          <button className="cta-button">Try Demo</button>
        </nav>
      </header>

      <main className="dashboard-content">
        <section className="hero-section">
          <div className="hero-text">
            <h2>Try AR on your car windshield with VRavity solution</h2>
            <p>Experience the next level of driving with augmented reality technology</p>
            <div className="hero-buttons">
              <button className="primary-button">Try AR</button>
              <button className="secondary-button">Our Technology</button>
            </div>
          </div>
        </section>

        <section className="metrics-section">
          <div className="metric-card">
            <h3>Speed</h3>
            <p className="metric-value">65 <span>mph</span></p>
          </div>
          <div className="metric-card">
            <h3>Camera</h3>
            <div className="camera-feed"></div>
          </div>
          <div className="metric-card">
            <h3>Diagnostics</h3>
            <div className="diagnostics-status">All Systems Normal</div>
          </div>
        </section>

        <section className="ai-section">
          <h2>AI Solution</h2>
          <div className="subscription-card">
            <h3>Subscription</h3>
            <p className="price">$29 <span>/month</span></p>
            <button className="subscribe-button">Subscribe</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;