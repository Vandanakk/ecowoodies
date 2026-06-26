import React from 'react';
import { ShoppingBasket, PenTool, Leaf, Tag, Package, Globe } from 'lucide-react';

import rawMaterials from '../assets/workshop_raw_materials.png';
import weaving from '../assets/workshop_weaving.png';
import quality from '../assets/workshop_quality.png';
import packing from '../assets/workshop_packing.png';
import warehouse from '../assets/workshop_warehouse.png';
import bulk from '../assets/workshop_bulk.png';
import finishing from '../assets/workshop_finishing.png';
import shipment from '../assets/workshop_shipment.png';
import loading from '../assets/workshop_loading.png';

const AboutUs: React.FC = () => {
  const wholesaleFeatures = [
    {
      title: "Handcrafted Quality",
      description: "Every piece woven by skilled artisans using traditional techniques refined over generations.",
      icon: <ShoppingBasket size={32} />
    },
    {
      title: "OEM & ODM Capability",
      description: "Full customization: size, material, design, packaging, and branding to your specification.",
      icon: <PenTool size={32} />
    },
    {
      title: "Sustainable Materials",
      description: "Rattan, seagrass, water hyacinth, and wood — renewable, biodegradable, and responsibly sourced.",
      icon: <Leaf size={32} />
    },
    {
      title: "Private Label Ready",
      description: "Custom logos, brand labels, and packaging inserts for qualified wholesale orders.",
      icon: <Tag size={32} />
    },
    {
      title: "Export-Grade Packaging",
      description: "Inspected, export-ready packaging built for international sea and air freight.",
      icon: <Package size={32} />
    },
    {
      title: "Global Shipping Support",
      description: "Documentation and logistics support for buyers across 30+ countries.",
      icon: <Globe size={32} />
    }
  ];

  const workshopSteps = [
    { title: "Raw Material Selection", image: rawMaterials },
    { title: "Hand-Weaving", image: weaving },
    { title: "Quality Inspection", image: quality },
    { title: "Export Packing", image: packing },
    { title: "Our Workshop", image: warehouse },
    { title: "Bulk Production", image: bulk },
    { title: "Finishing & Assembly", image: finishing },
    { title: "Ready for Shipment", image: shipment },
    { title: "Loading Container", image: loading },
  ];

  return (
    <div className="about-page">
      {/* Wholesale Section */}
      <section className="wholesale-section">
        <div className="section-header">
          <h4 className="section-subtitle">WHY ECOWOODIES</h4>
          <h1 className="section-title">Built for Global Wholesale Partners</h1>
        </div>

        <div className="wholesale-grid">
          {wholesaleFeatures.map((feature, index) => (
            <div className="wholesale-card" key={index}>
              <div className="wholesale-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workshop Section */}
      <section className="workshop-section">
        <div className="section-header align-left">
          <h4 className="section-subtitle">INSIDE OUR WORKSHOP</h4>
          <h1 className="section-title">From Raw Fiber to Finished Craft</h1>
          <p className="section-description">
            Our artisans hand-weave every piece using rattan, seagrass, and natural fibers — combining heritage techniques with export-quality finishing.
          </p>
        </div>

        <div className="workshop-grid">
          {workshopSteps.map((step, index) => (
            <div className="workshop-card" key={index}>
              <div className="workshop-image-wrapper">
                <img src={step.image} alt={step.title} />
              </div>
              <p className="workshop-caption">{step.title}</p>
            </div>
          ))}

          {/* 10th Special Card */}
          <div className="workshop-card">
            <div className="workshop-image-wrapper special-wrapper">
              <div className="special-grid">
                <img src={packing} alt="packing 1" />
                <img src={shipment} alt="packing 2" />
                <img src={loading} alt="packing 3" />
                <img src={quality} alt="packing 4" />
              </div>
            </div>
            <p className="workshop-caption">Each product pack in poly bags & card box</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
