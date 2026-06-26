import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import CategoryPage from './pages/CategoryPage';
import AboutUs from './pages/AboutUs';
import CSR from './pages/CSR';
import ContactUs from './pages/ContactUs';
import Workshop from './pages/Workshop';
import Quote from './pages/Quote';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:categoryId" element={<CategoryPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="workshop" element={<Workshop />} />
          <Route path="csr" element={<CSR />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
