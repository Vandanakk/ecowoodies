import React from 'react';
import { Phone, Mail } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="contact-info">
        <span><Phone size={14} /> +91 98765 43210</span>
        <span><Mail size={14} /> info@ecowoodies.com</span>
      </div>
    </div>
  );
};

export default TopBar;
