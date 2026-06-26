import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon-container">
          <div className="logo-icon">ecowoodies</div>
        </div>
        <div className="logo-text">
          <h2>ECOWOODIES</h2>
          <p>Eco-way of Living</p>
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
            Products
          </NavLink>
        </li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Videos</a></li>
        <li>
          <NavLink to="/workshop" className={({ isActive }) => (isActive ? 'active' : '')}>
            Workshop
          </NavLink>
        </li>
        <li>
          <NavLink to="/csr" className={({ isActive }) => (isActive ? 'active' : '')}>
            CSR
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact Us
          </NavLink>
        </li>
      </ul>
      <button className="quote-btn" onClick={() => window.location.href = '/quote'}>Get a Quote</button>
    </nav>
  );
};

export default Navbar;
