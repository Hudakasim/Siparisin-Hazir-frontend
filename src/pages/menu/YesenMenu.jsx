import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../../components/Navbar2';
import Sidebar from '../../components/Menu/Sidebar';
import MenuSection from '../../components/Menu/MenuSection';
import PopupManager from '../../components/Popup/PopupManager';
import '../../styles/menu.css';

const categories = ['Burgerler', 'Atıştırmalık', 'İçecek', 'Sos'];

const YesenMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [menuData, setMenuData] = useState({});
  const [popupProduct, setPopupProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const sectionRefs = useRef({});

  // Menü verisini JSON'dan yükle
  useEffect(() => {
    fetch("/Menuler/YesenMenuData.json")
      .then(response => response.json())
      .then(data => setMenuData(data))
      .catch(error => console.error("Menü verisi alınamadı:", error));
  }, []);

  // Seçili kategoriye scroll yap
  useEffect(() => {
    if (sectionRefs.current[selectedCategory]) {
      sectionRefs.current[selectedCategory].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [selectedCategory]);

  // Ürün tıklama
  const handleProductClick = (product) => {
    setPopupProduct(product);
    setIsPopupOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar
          categories={categories}
          onSelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <main className="product-area">
          {categories.map((category) => (
            <div
              key={category}
              ref={(el) => (sectionRefs.current[category] = el)}
            >
              {selectedCategory === category && menuData[category] && (
                <MenuSection
                  title={category}
                  products={menuData[category]}
                  onProductClick={handleProductClick}
                />
              )}
            </div>
          ))}
        </main>
      </div>

      {popupProduct && isPopupOpen && (
        <PopupManager
          popupType={popupProduct.type}
          product={popupProduct}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </>
  );
};

export default YesenMenu;
