import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




function AuthForm() {
  const [activeTab, setActiveTab] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:8080/users?email=${loginEmail}&password=${loginPassword}`)
      .then((response) => {
        if (response.data.length > 0) {
          const user = response.data[0];

          // Kullanıcı adı (username) varsa onu kaydet
          const displayName = user.username;

          localStorage.setItem("user", JSON.stringify({ name: displayName }));

          alert("Giriş başarılı!");

          window.location.href = "/";
        } else {
          alert("E-posta veya şifre yanlış!");
        }
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/users", {
        username: registerUsername, // Kullanıcı adı
        email: registerEmail,       // E-posta
        password: registerPassword
      })
      .then((response) => {
        alert("Kayıt başarılı!");
        setActiveTab("login");
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
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
            <input
              type="email"
              id="loginEmail"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />

            <label htmlFor="loginPassword">Şifre</label>
            <input
              type="password"
              id="loginPassword"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />

            <Link to="/reset-password">Şifremi Unuttum</Link>
            <button type="submit" className="btn-primary">GİRİŞ YAP</button>
          </form>
        </div>
      )}

      {activeTab === "register" && (
        <div className="form-section">
          <form onSubmit={handleRegister}>
            <label htmlFor="registerUsername">Kullanıcı Adı</label>
            <input
              type="text"
              id="registerUsername"
              value={registerUsername}
              onChange={(e) => setRegisterUsername(e.target.value)}
              required
            />

            <label htmlFor="registerEmail">E-Posta</label>
            <input
              type="email"
              id="registerEmail"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              required
            />

            <label htmlFor="registerPassword">Şifre</label>
            <input
              type="password"
              id="registerPassword"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              required
            />

            <button type="submit" className="btn-primary">ÜYE OL</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AuthForm;
