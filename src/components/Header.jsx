import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';

const Header = ({ sidebarOpen, setSidebarOpen, searchOpen, setSearchOpen }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu size={24} color="#808000" />
        </button>
        <div className="logo">
          <div className="logo-top">
            <img src="/image 3.png" alt="Flower Shop Logo" />
            <div className="logo-text">
              <span>olive_gardens</span>
              <div className="logo-subtitle">where nature thrive</div>
            </div>
          </div>
        </div>
      </div>
      <nav className="header-nav">
        <a href="#dashboard">Home</a>
        <a href="#orders">Orders</a>
        <a href="#about">About</a>
      </nav>
      <div className="header-icons">
        <button className="search-icon" onClick={() => setSearchOpen(!searchOpen)}>
          <Search size={20} color="#808000" />
        </button>
        <ShoppingCart size={24} color="#808000" />
        <User size={24} color="#808000" />
      </div>
    </header>
  );
};

export default Header;