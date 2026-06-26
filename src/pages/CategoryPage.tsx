import React from 'react';
import { useParams, Link } from 'react-router-dom';
import rattanChairImg from '../assets/rattan_chair_1782452376795.png';
import bambooImg from '../assets/bamboo_furniture_1782452366024.png';
import basketImg from '../assets/woven_basket_1782452391959.png';
import strollerImg from '../assets/baby_stroller_prop_1782452405666.png';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams();

  const sidebarCategories = [
    "Patio Chairs",
    "Storage Basket",
    "Newborn Photography Props",
    "Baby Product",
    "Cutlery",
    "Bamboo Crafts",
    "Bamboo Chairs",
    "Dining Chairs",
    "Bakery Tray",
    "Bamboo Drinking Straws",
    "Lamps",
    "Living Room Furniture",
    "Sofas"
  ];

  // Dummy products for the specific category
  const products = [
    {
      id: 1,
      image: rattanChairImg,
      title: "Premium Quality Modern Eco-Friendly Natural Bamboo Wicker Stool",
      minOrder: "2 pieces"
    },
    {
      id: 2,
      image: bambooImg,
      title: "Modern Classic Round Rattan Wicker Eco-Friendly Stool",
      minOrder: "3 pieces"
    },
    {
      id: 3,
      image: rattanChairImg,
      title: "Ecowoodies Traditional Indian Bamboo Mudda Stool for Living Room",
      minOrder: "5 pieces"
    },
    {
      id: 4,
      image: bambooImg,
      title: "Handcrafted Natural Cane Ottoman Sitting Stool by Ecowoodies",
      minOrder: "10 pieces"
    },
    {
      id: 5,
      image: rattanChairImg,
      title: "Vintage Style Bamboo Step Stool for Kitchen and Garden",
      minOrder: "5 pieces"
    },
    {
      id: 6,
      image: bambooImg,
      title: "Eco-Friendly High Bar Stool Handwoven with Natural Rattan",
      minOrder: "4 pieces"
    }
  ];

  return (
    <div className="category-page" style={{ display: 'flex', padding: '40px 5%', gap: '30px', background: '#f8f9fa', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="sidebar" style={{ width: '260px', flexShrink: 0, background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px', padding: '20px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '15px', borderBottom: '1px solid #eaeaea', paddingBottom: '15px', color: '#111' }}>Product categories</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {sidebarCategories.map((cat, idx) => (
            <li key={idx} style={{ marginBottom: '12px' }}>
              <Link to={`/products/${cat.toLowerCase().replace(/\s+/g, '-')}`} style={{ textDecoration: 'none', color: '#555', fontSize: '0.95rem', display: 'block', transition: 'color 0.2s' }}>
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content" style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', textTransform: 'capitalize', color: '#111' }}>
            {categoryId ? categoryId.replace(/-/g, ' ') : 'All products'}
          </h2>
          <div style={{ display: 'flex', gap: '10px' }}>
             <select style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: '20px', background: '#fff', fontSize: '0.9rem', cursor: 'pointer' }}>
               <option>New</option>
               <option>Popular</option>
             </select>
          </div>
        </div>

        <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
          {products.map(product => (
            <div key={product.id} className="product-item-card" style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s, box-shadow 0.2s' }}
                 onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                 onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden', padding: '12px', background: '#fdfdfd' }}>
                <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
              </div>
              <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '500', color: '#222', marginBottom: '12px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.4' }}>
                  {product.title}
                </h4>
                <div style={{ marginTop: 'auto' }}>
                  <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '16px' }}>Min. Order: {product.minOrder}</p>
                  <button style={{ width: '100%', padding: '10px 0', background: '#fff', border: '1px solid #222', borderRadius: '24px', color: '#222', fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}
                          onMouseOver={(e) => { e.currentTarget.style.background = '#222'; e.currentTarget.style.color = '#fff'; }}
                          onMouseOut={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#222'; }}>
                    Chat now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
