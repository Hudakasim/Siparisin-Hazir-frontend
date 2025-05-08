import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <a href="#home"><img src="/images/anasayfa/logo.png" alt="Siparişin Hazır" /></a>
      </div>

      <div className="nav-links">
        <a href="#home">Ana Sayfa</a>
        <a href="#about">Biz</a>
        <a href="#contact">İletişime Geçin</a>
      </div>

      <div className="nav-icons">
        {!user ? (
          <Link to="/login"><i className="fas fa-user"></i></Link>
        ) : (
          <div className="user-info" style={{ position: "relative" }}>
            <span onClick={toggleDropdown} style={{ cursor: "pointer" }}>
              Hoşgeldin, {user.name}
            </span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/orders">Eski Siparişlerim</Link>
                <button onClick={handleLogout}>Çıkış Yap</button>
              </div>
            )}
          </div>
        )}
        <Link to="/sepet"><i className="fas fa-shopping-cart"></i></Link>
      </div>
    </header>
  );
};

export default Navbar;
