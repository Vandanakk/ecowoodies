import React, { useState } from 'react';
import { Clock, Phone, Mail, ShoppingBasket, Leaf, ArrowRight } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [customization, setCustomization] = useState(true);

  return (
    <div className="contact-page">
      <div className="contact-container">
        
        {/* Left Section */}
        <div className="contact-left">
          <h4 className="contact-subtitle">GET IN TOUCH</h4>
          <h1 className="contact-title">Let's Talk About<br/>Your Order</h1>
          
          <div className="contact-divider">
             <div className="divider-line"></div>
             <div className="divider-icon"><Leaf size={16} /></div>
             <div className="divider-line"></div>
          </div>

          <p className="contact-description">
            Share your product interest and requirements — our team will respond with catalogues, pricing, and production timelines.
          </p>

          <div className="contact-info-list">
            <div className="info-item">
              <div className="info-icon"><Clock size={24} /></div>
              <div className="info-text">
                <span className="label">Typical response time:</span>
                <span className="value">within 24–48 hours</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><Phone size={24} /></div>
              <div className="info-text">
                <span className="label">Phone / WhatsApp</span>
                <span className="value">+84 962 985 982</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><Mail size={24} /></div>
              <div className="info-text">
                <span className="label">Email</span>
                <span className="value">info@ecowoodies.com</span>
              </div>
            </div>
          </div>

          <div className="decorative-illustration">
            <ShoppingBasket size={80} className="deco-icon basket1" />
            <ShoppingBasket size={60} className="deco-icon basket2" />
            <Leaf size={70} className="deco-icon plant" />
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-right">
          <div className="contact-card">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name <span className="required">*</span></label>
                  <input type="text" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" placeholder="Enter your company name" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email <span className="required">*</span></label>
                  <input type="email" placeholder="Enter your email address" />
                </div>
                <div className="form-group">
                  <label>Phone / WhatsApp</label>
                  <input type="text" placeholder="Enter your phone number" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Country <span className="required">*</span></label>
                  <select>
                    <option value="">Select your country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="au">Australia</option>
                    <option value="in">India</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Product Interest <span className="required">*</span></label>
                  <select>
                    <option value="">Select product interest</option>
                    <option value="furniture">Furniture</option>
                    <option value="homedecor">Home Décor</option>
                    <option value="baby">Baby Collection</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group full-width">
                  <label>Estimated Quantity</label>
                  <select>
                    <option value="">Select estimated quantity or enter details</option>
                    <option value="small">1 - 50 items</option>
                    <option value="medium">51 - 200 items</option>
                    <option value="large">200+ items</option>
                  </select>
                </div>
              </div>

              <div className="form-row align-center custom-row">
                <label className="inline-label">Customization Needed?<span className="required">*</span></label>
                <div className="toggle-group">
                  <button 
                    type="button" 
                    className={`toggle-btn ${customization ? 'active' : ''}`}
                    onClick={() => setCustomization(true)}
                  >
                    Yes
                  </button>
                  <button 
                    type="button" 
                    className={`toggle-btn ${!customization ? 'active' : ''}`}
                    onClick={() => setCustomization(false)}
                  >
                    No
                  </button>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group full-width">
                  <label>Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your requirements, product details, packaging, branding, or any other information..."
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Send Inquiry <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
