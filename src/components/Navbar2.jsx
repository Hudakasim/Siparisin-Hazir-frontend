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
        {!user ? (
          <a href="/login" title="Giriş"><i className="fas fa-user"></i></a>
        ) : (
          <div className="user-info">
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
        <a href="/sepet" title="Sepet"><i className="fas fa-shopping-cart"></i></a>
      </div>
    </header>
  );
};

export default Navbar;
