import React, { useState } from "react";

function AuthForm() {
  const [activeTab, setActiveTab] = useState("login");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Giriş başarılı!");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Kayıt başarılı!");
  };

  return (
    <div className="auth-container">
      <h2>Merhaba,</h2>
      <p>Giriş yap veya hesap oluştur, indirimleri kaçırma!</p>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "login" ? "active" : ""}`}
          onClick={() => setActiveTab("login")}
        >
          Giriş Yap
        </button>
        <button
          className={`tab ${activeTab === "register" ? "active" : ""}`}
          onClick={() => setActiveTab("register")}
        >
          Üye Ol
        </button>
      </div>

      {activeTab === "login" && (
        <div className="form-section">
          <form onSubmit={handleLogin}>
            <label htmlFor="loginEmail">E-Posta</label>
            <input type="email" id="loginEmail" required />

            <label htmlFor="loginPassword">Şifre</label>
            <input type="password" id="loginPassword" required />

            <a href="/">Şifremi Unuttum</a>
            <button type="submit" className="btn-primary">GİRİŞ YAP</button>
          </form>
        </div>
      )}

      {activeTab === "register" && (
        <div className="form-section">
          <form onSubmit={handleRegister}>
            <label htmlFor="registerName">Ad Soyad</label>
            <input type="text" id="registerName" required />

            <label htmlFor="registerEmail">E-Posta</label>
            <input type="email" id="registerEmail" required />

            <label htmlFor="registerPassword">Şifre</label>
            <input type="password" id="registerPassword" required />

            <button type="submit" className="btn-primary">ÜYE OL</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AuthForm;
