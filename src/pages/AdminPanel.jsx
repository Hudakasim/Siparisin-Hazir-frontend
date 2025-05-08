import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import '../styles/admin.css'

function AdminMenuEditor() {
  const { menuName } = useParams();
  const [menuData, setMenuData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");

    const menuMap = {
      "aker@gmail.com": "akermenu",
      "coffee@gmail.com": "coffeemenu",
      "yesen@gmail.com": "yesenmenu"
    };

    if (menuMap[email] !== menuName) {
      alert("Yetkisiz erişim!");
      navigate("/login", { replace: true });
      return;
    }

    axios.get(`http://localhost:8081/${menuName}`)
      .then(res => setMenuData(res.data))
      .catch(err => console.error("Veri alınamadı", err));
  }, [menuName, navigate]);

  const handleProductChange = (category, index, field, value) => {
    const updated = { ...menuData };
    updated[category][index][field] = value;
    setMenuData(updated);
  };

  const handleAddProduct = (category) => {
    const newProduct = { id: Date.now(), name: "Yeni Ürün", price: "", image: "", type: "" };
    const updated = { ...menuData };
    updated[category].push(newProduct);
    setMenuData(updated);
  };

  const handleDeleteProduct = (category, index) => {
    const updated = { ...menuData };
    updated[category].splice(index, 1);
    setMenuData(updated);
  };

  const handleSave = () => {
    axios.put(`http://localhost:8081/${menuName}`, menuData)
      .then(() => alert("Kaydedildi!"))
      .catch(err => console.error("Kayıt hatası", err));
  };

  return (
    <div className="admin-panel">
      <button className="cikis-btn"
        onClick={() => {
          localStorage.removeItem("user");
          localStorage.removeItem("userEmail");
          navigate("/login", { replace: true });
        }}
      >
        Çıkış Yap
      </button>

      <h1>{menuName} Düzenleme Paneli</h1>

      {Object.keys(menuData).length === 0 ? (
        <p>Yükleniyor...</p>
      ) : (
        Object.keys(menuData).map(category => (
          <div key={category} className="admin-category">
            <h3>{category} <button onClick={() => handleAddProduct(category)}>Yeni Ürün Ekle</button></h3>
            {menuData[category].map((product, index) => (
              <div key={product.id} className="admin-product">
                <input
                  value={product.name}
                  onChange={(e) => handleProductChange(category, index, "name", e.target.value)}
                />
                <input
                  value={product.price}
                  onChange={(e) => handleProductChange(category, index, "price", e.target.value)}
                />
                <input
                  value={product.image}
                  onChange={(e) => handleProductChange(category, index, "image", e.target.value)}
                />
                <input
                  value={product.type}
                  onChange={(e) => handleProductChange(category, index, "type", e.target.value)}
                />
                <button onClick={() => handleDeleteProduct(category, index)}>Sil</button>
              </div>
            ))}
          </div>
        ))
      )}

      <button className="admin-save" onClick={handleSave}>Kaydet</button>
    </div>
  );
}

export default AdminMenuEditor;
