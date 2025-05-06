// src/components/BrandMenu.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BrandMenu = () => {
  const navigate = useNavigate();

  return (
    <section className="brand-menu">
      <div className="menu-card" onClick={() => navigate('/coffee')}>
        <img src="/images/anasayfa/coffeefactory.png" alt="Coffee Factory" />
        <h3>Coffee Factory</h3>
      </div>

      <div className="menu-card" onClick={() => navigate('/yesen')}>
        <img src="/images/anasayfa/yesenburger.jpg" alt="Yesen Burger" />
        <h3>Yesen Burger</h3>
      </div>

      <div className="menu-card" onClick={() => navigate('/aker')}>
        <img src="/images/anasayfa/akerkafe.jpg" alt="Aker Kafe" />
        <h3>Aker Kafe</h3>
      </div>
    </section>
  );
};

export default BrandMenu;
