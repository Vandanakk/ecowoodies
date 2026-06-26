import React from 'react';
import { Leaf, Users, ShieldCheck, HeartHandshake, TreePine, Globe, Handshake, ShoppingBag, CheckCircle2 } from 'lucide-react';
import csrHero from '../assets/csr_hero.png';
import csrLandscape from '../assets/csr_landscape.png';
import focus1 from '../assets/workshop_warehouse.png';
import focus2 from '../assets/workshop_finishing.png';
import focus3 from '../assets/workshop_quality.png';
import focus4 from '../assets/workshop_packing.png';
import focus5 from '../assets/workshop_shipment.png';

const CSR: React.FC = () => {
  const highlights = [
    { icon: <Users size={24} />, text: "Supporting traditional artisan communities" },
    { icon: <Leaf size={24} />, text: "Promoting sustainable and ethical production" },
    { icon: <TreePine size={24} />, text: "Using renewable, biodegradable materials" },
    { icon: <HeartHandshake size={24} />, text: "Building long-term community partnerships" }
  ];

  const focusAreas = [
    {
      title: "Empowering People",
      desc: "Creating fair employment opportunities and supporting artisan skills development.",
      image: focus1,
      icon: <Users size={20} />
    },
    {
      title: "Sustainable Materials",
      desc: "We use rattan, seagrass, water hyacinth, and wood from renewable sources.",
      image: focus2,
      icon: <Leaf size={20} />
    },
    {
      title: "Community Well-being",
      desc: "Investing in education, health, and basic needs for stronger communities.",
      image: focus3,
      icon: <ShieldCheck size={20} />
    },
    {
      title: "Responsible Production",
      desc: "Minimizing waste and reducing our environmental footprint at every step.",
      image: focus4,
      icon: <Globe size={20} />
    },
    {
      title: "Long-term Partnerships",
      desc: "Building trust and growth through transparent and ethical collaborations.",
      image: focus5,
      icon: <Handshake size={20} />
    }
  ];

  const impacts = [
    { icon: <Users size={40} />, number: "500+", text: "Artisans & Families Empowered" },
    { icon: <ShoppingBag size={40} />, number: "50,000+", text: "Handmade Products Created Annually" },
    { icon: <Leaf size={40} />, number: "100%", text: "Renewable & Natural Materials Used" },
    { icon: <Globe size={40} />, number: "30+", text: "Countries We Export To" },
    { icon: <TreePine size={40} />, number: "1,000+", text: "Trees Planted (And Counting)" }
  ];

  const approaches = [
    {
      title: "Ethical Sourcing",
      desc: "We source natural materials responsibly, ensuring minimal environmental impact."
    },
    {
      title: "Fair & Safe Workplaces",
      desc: "We provide fair wages, safe working conditions, and respect for every artisan."
    },
    {
      title: "Community Investment",
      desc: "We support education, healthcare, and livelihoods in the communities we work with."
    },
    {
      title: "Environmental Care",
      desc: "We reduce waste, use eco-friendly packaging, and support reforestation initiatives."
    }
  ];

  return (
    <div className="csr-page">
      {/* Hero Section */}
      <section className="csr-hero">
        <div className="csr-hero-content">
          <h4 className="section-subtitle">OUR COMMITMENT</h4>
          <h1 className="csr-hero-title">Crafting Impact.<br/>Empowering<br/>Communities.</h1>
          <p className="csr-hero-desc">
            At Ecowoodies, we believe business growth and community well-being go hand in hand. Through responsible practices and meaningful partnerships, we strive to create a positive impact on people and the planet.
          </p>
        </div>
        <div className="csr-hero-image-container">
          <img src={csrHero} alt="Women artisans smiling" className="csr-hero-img" />
          <div className="csr-highlights-card">
            <h4>HIGHLIGHTS</h4>
            <ul>
              {highlights.map((h, i) => (
                <li key={i}>
                  <div className="highlight-icon">{h.icon}</div>
                  <span>{h.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="csr-focus-section">
        <div className="section-header">
          <h4 className="section-subtitle">OUR FOCUS AREAS</h4>
        </div>
        <div className="csr-focus-grid">
          {focusAreas.map((area, i) => (
            <div className="csr-focus-card" key={i}>
              <div className="focus-img-wrapper">
                <img src={area.image} alt={area.title} />
              </div>
              <div className="focus-content">
                <div className="focus-title-row">
                  <div className="focus-icon">{area.icon}</div>
                  <h5>{area.title}</h5>
                </div>
                <p>{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="csr-impact-section">
        <div className="section-header">
          <h4 className="section-subtitle">OUR IMPACT</h4>
        </div>
        <div className="csr-impact-grid">
          {impacts.map((impact, i) => (
            <div className="impact-stat" key={i}>
              <div className="impact-icon">{impact.icon}</div>
              <h2>{impact.number}</h2>
              <p>{impact.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="csr-approach-section">
        <div className="csr-approach-content">
          <h4 className="section-subtitle">OUR APPROACH</h4>
          <div className="approach-list">
            {approaches.map((app, i) => (
              <div className="approach-item" key={i}>
                <div className="approach-icon"><CheckCircle2 size={24} /></div>
                <div className="approach-text">
                  <h5>{app.title}</h5>
                  <p>{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="secondary-btn" style={{marginTop: '32px'}}>Learn More About Us &rarr;</button>
        </div>
        <div className="csr-approach-image">
          <img src={csrLandscape} alt="Lush green forest and river" />
        </div>
      </section>

      {/* Footer Banner */}
      <section className="csr-footer-banner">
        <div className="banner-left">
          <div className="banner-icon">
            <Leaf size={48} />
          </div>
          <div className="banner-text">
            <h3>Better Craft. Better Life. Better Tomorrow.</h3>
            <p>Together with our partners and communities, we're building a sustainable future for generations to come.</p>
          </div>
        </div>
        <button className="outline-btn-white">Partner With Us &rarr;</button>
      </section>
    </div>
  );
};

export default CSR;
