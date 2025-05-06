// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar2">
      <div className="logo">
        <a href="/">
          <img src="/images/anasayfa/logo.png" alt="SiparişinHazır" />
        </a>
      </div>
      <div className="nav-links2">
        <a href="/">Ana Sayfa</a>
      </div>
      <div className="nav-icons">
        <a href="/login" title="Giriş"><i className="fas fa-user"></i></a>
        <a href="/sepet" title="Sepet"><i className="fas fa-shopping-cart"></i></a>
      </div>
    </header>
  );
};

export default Navbar;

