import React from 'react';
import { FileEdit, User, Mail, Phone, Building, MapPin, Package, Calendar, UploadCloud, Send, ShieldCheck, Leaf } from 'lucide-react';

const Quote: React.FC = () => {
  return (
    <div className="quote-page">
      <div className="quote-container">
        
        <div className="quote-header">
          <div className="quote-header-icon">
            <FileEdit size={36} />
          </div>
          <h1 className="quote-title">Request a Quote</h1>
          <div className="contact-divider" style={{justifyContent: 'center'}}>
             <div className="divider-line"></div>
             <div className="divider-icon"><Leaf size={16} /></div>
             <div className="divider-line"></div>
          </div>
          <p className="quote-desc">Please fill in the details below and we will get back to you soon.</p>
        </div>

        <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
          
          <div className="q-form-row">
            <div className="q-form-group">
              <label>Full Name <span className="required">*</span></label>
              <div className="q-input-wrapper">
                <User size={18} className="q-input-icon" />
                <input type="text" placeholder="Enter your full name" required />
              </div>
            </div>
            <div className="q-form-group">
              <label>Email Address <span className="required">*</span></label>
              <div className="q-input-wrapper">
                <Mail size={18} className="q-input-icon" />
                <input type="email" placeholder="Enter your email" required />
              </div>
            </div>
          </div>

          <div className="q-form-row">
            <div className="q-form-group">
              <label>Phone Number <span className="required">*</span></label>
              <div className="q-input-wrapper">
                <Phone size={18} className="q-input-icon" />
                <input type="text" placeholder="Enter your phone number" required />
              </div>
            </div>
            <div className="q-form-group">
              <label>Company Name</label>
              <div className="q-input-wrapper">
                <Building size={18} className="q-input-icon" />
                <input type="text" placeholder="Enter your company name" />
              </div>
            </div>
          </div>

          <div className="q-form-row">
            <div className="q-form-group">
              <label>Country <span className="required">*</span></label>
              <div className="q-input-wrapper select-wrapper">
                <select required>
                  <option value="">Select your country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="in">India</option>
                </select>
              </div>
            </div>
            <div className="q-form-group">
              <label>City <span className="required">*</span></label>
              <div className="q-input-wrapper">
                <MapPin size={18} className="q-input-icon" />
                <input type="text" placeholder="Enter your city" required />
              </div>
            </div>
          </div>

          <div className="q-form-row">
            <div className="q-form-group full-width">
              <label>Product Category <span className="required">*</span></label>
              <div className="q-input-wrapper select-wrapper">
                <select required>
                  <option value="">Select a category</option>
                  <option value="furniture">Furniture</option>
                  <option value="homedecor">Home Decor</option>
                  <option value="lighting">Lighting</option>
                  <option value="baskets">Baskets & Storage</option>
                </select>
              </div>
            </div>
          </div>

          <div className="q-form-row">
            <div className="q-form-group full-width">
              <label>Product / Item Details <span className="required">*</span></label>
              <textarea 
                rows={4} 
                placeholder="Describe the product, size, quantity, material, finish, or any specific requirement..."
                required
              ></textarea>
            </div>
          </div>

          <div className="q-form-row">
            <div className="q-form-group">
              <label>Preferred Quantity</label>
              <div className="q-input-wrapper">
                <Package size={18} className="q-input-icon" />
                <input type="text" placeholder="Enter quantity (e.g., 100 pieces)" />
              </div>
            </div>
            <div className="q-form-group">
              <label>Preferred Delivery Time</label>
              <div className="q-input-wrapper select-wrapper">
                <Calendar size={18} className="q-input-icon calendar-icon" />
                <select style={{paddingLeft: '40px'}}>
                  <option value="">Select delivery timeline</option>
                  <option value="1month">Within 1 Month</option>
                  <option value="2months">1-2 Months</option>
                  <option value="3months+">3+ Months</option>
                </select>
              </div>
            </div>
          </div>

          <div className="q-form-row">
            <div className="q-form-group full-width">
              <label>Upload Reference (Optional)</label>
              <div className="q-upload-zone">
                <UploadCloud size={32} className="upload-icon" />
                <p><strong>Click to upload</strong> or drag and drop</p>
                <span className="upload-hint">Images, drawings, or reference files (Max. 5MB each)</span>
              </div>
            </div>
          </div>

          <button type="submit" className="q-submit-btn">
            <Send size={18} /> Submit Request
          </button>

          <div className="q-secure-note">
            <ShieldCheck size={16} />
            <span>Your information is secure and will only be used to process your request.</span>
          </div>

        </form>

      </div>
    </div>
  );
};

export default Quote;
