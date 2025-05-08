import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar2";
import "../styles/resetpassword.css";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();  // yönlendirme için

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Lütfen e-posta adresinizi giriniz.");
      return;
    }

    alert("Şifre yenileme işlemi şu anda aktif değildir. Lütfen daha sonra tekrar deneyiniz.");
  };

  const handleBack = () => {
    navigate("/login");  // Giriş yap sayfasına yönlendirir
  };

  return (
    <>
      <Navbar />
      <div className="reset-password-container">
        <h2>Şifre Yenileme</h2>
        <p>Şifre yenileme bağlantısını gönderebilmemiz için e-posta adresinize ihtiyacımız var.</p>
        <form className="reset-password-form" onSubmit={handleSubmit}>
          <label>E-Posta</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary">Şifremi Yenile</button>
          <button type="button" onClick={handleBack} className="btn-secondary">Önceki Sayfaya Dön</button>

        </form>
      </div>
    </>
  );
}

export default ResetPassword;
