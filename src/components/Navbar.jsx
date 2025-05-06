import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <a href="#home"><img src="/images/anasayfa/logo.png" alt="Siparişin Hazır" /></a>
      </div>

      <div className="nav-links">
        <a href="#home" >Ana Sayfa</a>
        <a href="#about">Biz</a>
        <a href="#contact">İletişime Geçin</a>
      </div>

      <div className="nav-icons">
        <Link to="/login"><i className="fas fa-user"></i></Link>
        <Link to="/sepet"><i className="fas fa-shopping-cart"></i></Link>
      </div>
    </header>
  );
};

export default Navbar;

