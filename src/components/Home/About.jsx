// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <h2>Biz Kimiz</h2>
        <p>Siparişin Hazır ekibi olarak, öğrencilerin kampüs hayatını kolaylaştırmayı amaçlayan yenilikçi çözümler geliştiriyoruz. Amacımız; yemek saatlerinde oluşan kalabalık ve zaman kaybını ortadan kaldırmak, teknolojiyi kullanarak daha konforlu bir kampüs deneyimi sunmaktır.</p>
      </div>

      <div className="about-content">
        <h4 className="about-title">Neden Siparişin Hazır?</h4>
        <div className="about-cards">
          <div className="about-card">
            <img src="/images/anasayfa/1.png" alt="kuyruk" />
            <h3>Yemeğinize ulaşmak için uzun kuyruklar beklemeyin</h3>
            <p>Hem sıra derdinizi hem de sipariş bekleme sürenizi minimum düzeyde tutun.</p>
          </div>

          <div className="about-card">
            <img src="/images/anasayfa/2.png" alt="sipariş kontrol" />
            <h3>Online siparişler ile sipariş hatalarını en aza indirgeyin</h3>
            <p>Siparişinizde eksik veya yanlış giden şeyleri ekranınızda takip edin.</p>
          </div>

          <div className="about-card">
            <img src="/images/anasayfa/3.png" alt="esneklik" />
            <h3>Dilediğiniz zaman sipariş verin, yemek saatlerinizi kendiniz belirleyin.</h3>
            <p>Sisteme istediğiniz zaman girerek sipariş oluşturabilir,yemek saatlerinizi planlayabilirsiniz.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
