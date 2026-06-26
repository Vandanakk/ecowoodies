import React from 'react';
import { Users, Leaf, ShieldCheck, Award, ArrowRight, PackageSearch, PenTool, Search, Sparkles, Box, LayoutGrid, Truck } from 'lucide-react';
import heroImg from '../assets/workshop_warehouse.png';
import heroInset from '../assets/csr_hero.png';
import img1 from '../assets/workshop_raw_materials.png';
import img2 from '../assets/workshop_weaving.png';
import img3 from '../assets/workshop_quality.png';
import img4 from '../assets/workshop_finishing.png';
import pack1 from '../assets/workshop_packing.png';
import pack2 from '../assets/workshop_bulk.png';
import pack4 from '../assets/workshop_loading.png';
import pack5 from '../assets/workshop_shipment.png';
import ctaImg from '../assets/hero-image.png';

const Workshop: React.FC = () => {
  const topFeatures = [
    { icon: <Users size={32} />, label: "Skilled Artisans" },
    { icon: <Leaf size={32} />, label: "Sustainable Materials" },
    { icon: <ShieldCheck size={32} />, label: "Ethical Production" },
    { icon: <Award size={32} />, label: "Quality Assured" },
  ];

  const processes = [
    { num: "1", icon: <PackageSearch size={28} />, title: "Material Selection", desc: "We carefully select premium rattan, cane, seagrass, bamboo, and other sustainable materials." },
    { num: "2", icon: <PenTool size={28} />, title: "Handcrafted by Artisans", desc: "Our skilled artisans handcraft each product with precision and attention to detail." },
    { num: "3", icon: <Search size={28} />, title: "Quality Inspection", desc: "Every piece undergoes strict quality checks to ensure durability and finish." },
    { num: "4", icon: <Sparkles size={28} />, title: "Finishing & Polishing", desc: "Products are finished with care to enhance beauty and long-lasting use." },
    { num: "5", icon: <Box size={28} />, title: "Ready for You", desc: "Sustainable, stylish, and functional pieces, ready to be a part of your space." }
  ];

  const insideWorkshop = [
    { image: img1, title: "Handcrafting with Heritage" },
    { image: img2, title: "Skilled Hands, Timeless Craft" },
    { image: img3, title: "Crafting Quality at Every Step" },
    { image: img4, title: "Diverse Designs, Endless Possibilities" }
  ];

  const packaging = [
    { image: pack1, title: "Secure Packaging", desc: "Eco-friendly packaging in poly bags and durable cardboard boxes." },
    { image: pack2, title: "Strong & Safe Boxes", desc: "High-quality corrugated boxes to protect during transit." },
    { 
      isLogos: true, 
      title: "Reliable Delivery Partners", 
      desc: "We partner with trusted courier services for timely and safe delivery." 
    },
    { image: pack4, title: "Careful Loading", desc: "Products are handled with care and loaded securely for safe transport." },
    { image: pack5, title: "On-Time, Every Time", desc: "Fast delivery and 100% quality assurance for complete peace of mind." }
  ];

  return (
    <div className="workshop-page">
      {/* Hero Section */}
      <section className="ws-hero">
        <div className="ws-hero-left">
          <h4 className="ws-subtitle">OUR WORKSHOP</h4>
          <h1 className="ws-title">Crafted with Skill.<br/>Built on Sustainability.</h1>
          <p className="ws-desc">
            At Ecowoodies, our workshop is where tradition meets innovation. From initial designs to responsible processes, every piece we create reflects our commitment to quality, people, and the planet.
          </p>
          <div className="ws-hero-features">
            {topFeatures.map((f, i) => (
              <div className="ws-hf-item" key={i}>
                <div className="ws-hf-icon">{f.icon}</div>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ws-hero-right">
          <img src={heroImg} alt="Workshop building and team" className="ws-hero-main-img" />
          <div className="ws-hero-inset">
            <img src={heroInset} alt="Working in office" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="ws-process">
        <div className="ws-process-header">
          <h4 className="ws-subtitle line-before-after">OUR CRAFTING PROCESS</h4>
          <h2>From Raw Material to Remarkable Creations</h2>
          <p>A dedicated process that ensures every product is eco-friendly, durable, and beautifully handcrafted.</p>
        </div>
        <div className="ws-process-steps">
          {processes.map((p, i) => (
            <div className="ws-step-card" key={i}>
              <div className="ws-step-header">
                <div className="ws-step-icon">{p.icon}</div>
              </div>
              <div className="ws-step-content">
                <div className="ws-step-num-title">
                  <span className="ws-step-num">{p.num}</span>
                  <h5>{p.title}</h5>
                </div>
                <p>{p.desc}</p>
              </div>
              {i < processes.length - 1 && <div className="ws-step-arrow"><ArrowRight size={24} /></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Inside Section */}
      <section className="ws-inside">
        <h4 className="ws-subtitle">INSIDE OUR WORKSHOP</h4>
        <div className="ws-inside-grid">
          {insideWorkshop.map((item, i) => (
            <div className="ws-inside-card" key={i}>
              <div className="ws-inside-img">
                <img src={item.image} alt={item.title} />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packaging Section */}
      <section className="ws-packaging">
        <div className="ws-process-header">
          <h4 className="ws-subtitle">PACKAGING & DELIVERY</h4>
          <h2>Carefully Packed. Delivered Safely.</h2>
          <p>We ensure every order reaches you in perfect condition, on time, every time.</p>
        </div>
        <div className="ws-pack-grid">
          {packaging.map((p, i) => (
            <div className="ws-pack-card" key={i}>
              <div className="ws-pack-visual">
                {p.isLogos ? (
                  <div className="ws-logos-box">
                    <p className="delivery-label">DELIVERY:</p>
                    <div className="logos-grid">
                       <div className="logo-placeholder">TNT</div>
                       <div className="logo-placeholder">UPS</div>
                       <div className="logo-placeholder">FedEx</div>
                       <div className="logo-placeholder">DHL</div>
                    </div>
                  </div>
                ) : (
                  <img src={p.image} alt={p.title} />
                )}
              </div>
              <h5>{p.title}</h5>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="ws-cta">
        <div className="ws-cta-left">
          <h3>Let's Create Something Beautiful</h3>
          <p>Premium quality, sustainable, handcrafted products that make a difference.</p>
          <button className="outline-btn-white">Get in Touch <ArrowRight size={16} style={{marginLeft: '8px'}} /></button>
        </div>
        <div className="ws-cta-middle">
          <div className="ws-cta-feature">
            <LayoutGrid size={32} />
            <div>
              <h4>Custom Solutions</h4>
              <p>Tailored designs for your unique needs</p>
            </div>
          </div>
          <div className="ws-cta-feature">
            <Leaf size={32} />
            <div>
              <h4>Sustainable Choice</h4>
              <p>Eco-friendly materials for a better tomorrow</p>
            </div>
          </div>
          <div className="ws-cta-feature">
            <Truck size={32} />
            <div>
              <h4>Trusted by Many</h4>
              <p>Join thousands of happy clients across the globe</p>
            </div>
          </div>
        </div>
        <div className="ws-cta-right">
          <img src={ctaImg} alt="Beautiful woven baskets" />
        </div>
      </section>
    </div>
  );
};

export default Workshop;
