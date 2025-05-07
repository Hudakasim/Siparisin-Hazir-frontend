// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <h2>Biz Kimiz</h2>
        <p>Siparişin Hazır ekibi olarak, öğrencilerin kampüs hayatını kolaylaştırmayı amaçlayan yenilikçi çözümler geliştiriyoruz</p>
      </div>

      <div className="about-content">
        <h4 className="about-title">Neden Siparişin Hazır?</h4>
        <div className="about-cards">
          <div className="about-card">
            <img src="/images/anasayfa/1.png" alt="kuyruk" />
            <h3>Yemeğinize ulaşmak için uzun kuyruklar beklemeyin</h3>
            <p>Sıra derdinizi ve bekleme sürenizi minimuma indirin.</p>
          </div>

          <div className="about-card">
            <img src="/images/anasayfa/2.png" alt="sipariş kontrol" />
            <h3>Online siparişlerle hataları azaltın</h3>
            <p>Sipariş takibi ekranınızda!</p>
          </div>

          <div className="about-card">
            <img src="/images/anasayfa/3.png" alt="esneklik" />
            <h3>Dilediğiniz zaman sipariş verin</h3>
            <p>Sipariş oluşturun, zamanınızı yönetin.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
