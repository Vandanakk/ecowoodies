import React from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="app-container">
      <TopBar />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
