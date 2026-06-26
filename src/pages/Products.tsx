import React from 'react';
import { Link } from 'react-router-dom';
import bambooImg from '../assets/bamboo_furniture_1782452366024.png';
import rattanChairImg from '../assets/rattan_chair_1782452376795.png';
import basketImg from '../assets/woven_basket_1782452391959.png';
import strollerImg from '../assets/baby_stroller_prop_1782452405666.png';
import { ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  const categories = [
    { title: "Stools", image: rattanChairImg, desc: "Small & versatile seating" },
    { title: "Bamboo Furniture", image: bambooImg, desc: "Sustainable seating & tables" },
    { title: "Baby Doll Strollers", image: strollerImg, desc: "Handcrafted doll strollers" },
    { title: "Bamboo Amplifiers", image: bambooImg, desc: "Natural acoustic amplifiers" },
    { title: "Bamboo Dining Sets", image: bambooImg, desc: "Elegant bamboo dining" },
    { title: "Handcrafted Baskets", image: basketImg, desc: "Woven storage & decor" },
    { title: "Minimalist Chairs", image: rattanChairImg, desc: "Simple, modern designs" },
    { title: "Hanging Chairs", image: rattanChairImg, desc: "Suspended seating" },
    { title: "Kids Chairs", image: rattanChairImg, desc: "Sturdy chairs for children" },
    { title: "Lighting", image: bambooImg, desc: "Natural woven fixtures" },
    { title: "Lounge Chairs", image: rattanChairImg, desc: "Relaxing lounge seating" },
    { title: "Newborn Photography", image: strollerImg, desc: "Props for photoshoots" },
    { title: "Pet Beds", image: basketImg, desc: "Cozy natural woven beds" },
    { title: "Rocking Chairs", image: rattanChairImg, desc: "Classic & comfortable" },
    { title: "Bamboo Shelves", image: bambooImg, desc: "Elegant storage shelves" },
    { title: "Sofa Sets", image: bambooImg, desc: "Natural living room sets" },
    { title: "Storage Boxes", image: basketImg, desc: "Beautiful home organization" },
    { title: "Tables", image: bambooImg, desc: "Coffee & side tables" },
    { title: "Serving Trays", image: basketImg, desc: "Woven trays for serving" }
  ];

  return (
    <div className="products-page">
      <div className="products-header">
        <h4 className="products-subtitle">OUR CATEGORIES</h4>
        <h1 className="products-title">Explore Our Range</h1>
        <p className="products-description">
          Browse our extensive range of handcrafted product categories — made with natural, sustainable materials.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '30px',
        padding: '20px 0'
      }}>
        {categories.map((item, index) => (
          <div className="collection-card" key={index} style={{ margin: 0 }}>
            <div className="card-image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to={`/products/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="view-collection-link">
                View Category <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
