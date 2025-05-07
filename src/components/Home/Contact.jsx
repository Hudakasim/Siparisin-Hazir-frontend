import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <span className="big-circle"></span>
        <img src="/images/anasayfa/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Bizimle İletişime Geç</h3>
            <p className="text">Görüş, öneri veya herhangi bir sorunuz varsa bizimle paylaşmaktan çekinmeyin!</p>

            <div className="info">
              <div className="information">
                <img src="/images/anasayfa/location.png" className="icon" alt="" />
                <p>İstanbul Sabahattin Zaim Üniversitesi Kampüs,Halkalı Merkez, Halkalı, 34303 Küçükçekmece/İstanbul</p>
              </div>
              <div className="information">
                <img src="/images/anasayfa/email.png" className="icon" alt="" />
                <p>info@siparisinhazir.com</p>
              </div>
              <div className="information">
                <img src="/images/anasayfa/phone.png" className="icon" alt="" />
                <p>+90 530 887 60 10</p>
              </div>
            </div>

          </div>

          <div className="contact-form">
            <form action="#" autoComplete="off">
              <h3 className="title">İletişim Formu</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" placeholder=" " required/>
                <label>Ad Soyad</label>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" placeholder=" " required/>
                <label>Email</label>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" placeholder=" " required/>
                <label>Telefon</label>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" placeholder=" " required/>
                <label>Mesaj</label>
              </div>
              <input type="submit" value="Gönder" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
