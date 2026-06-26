import React from 'react';
import { Leaf, Handshake, Globe } from 'lucide-react';
import heroImage from '../assets/hero-image.png';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">HANDCRAFTED • SUSTAINABLE • EXPORT-READY</p>
          <h1 className="hero-title">Handcrafted Natural<br/>Living, Made for<br/><span className="highlight">the World</span></h1>
          <p className="hero-description">
            Ecowoodies designs and manufactures rattan, seagrass, and wicker home décor, baby products, and furniture for retailers, distributors, and private-label brands across the globe.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Request a Catalogue</button>
            <button className="secondary-btn">Explore Collections</button>
          </div>
          
          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon"><Leaf size={20} /></div>
              <span>Sustainable<br/>Materials</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Handshake size={20} /></div>
              <span>Ethical<br/>Craftsmanship</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Globe size={20} /></div>
              <span>Global<br/>Partnerships</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Handcrafted Rattan Chest" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <div className="stat-icon"><Leaf size={28} /></div>
          <div className="stat-content">
            <h3>40+</h3>
            <h4>Years of Craftsmanship</h4>
            <p>Committed to quality since inception</p>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><Globe size={28} /></div>
          <div className="stat-content">
            <h3>30+</h3>
            <h4>Countries Served</h4>
            <p>Trusted by partners worldwide</p>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><Handshake size={28} /></div>
          <div className="stat-content">
            <h3>500+</h3>
            <h4>Global Partners</h4>
            <p>Long-term relationships built on trust</p>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><Leaf size={28} /></div>
          <div className="stat-content">
            <h3>100%</h3>
            <h4>Sustainable Materials</h4>
            <p>Natural, renewable, responsibly sourced</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
