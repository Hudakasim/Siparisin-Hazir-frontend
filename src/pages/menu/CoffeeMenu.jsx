import React, { useState, useRef, useEffect } from 'react';
import PopupManager from '../../components/Popup/PopupManager';
import Navbar from '../../components/Navbar2';
import Sidebar from '../../components/Menu/Sidebar';
import MenuSection from '../../components/Menu/MenuSection';
import '../../styles/menu.css';

// Kategoriler
const categories = ['Soğuk Kahveler', 'Sıcak Kahveler', "Refresher's", 'Fruit & Cream Beverage', 'Frozen'];

const CoffeeMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [menuData, setMenuData] = useState({});
  const [popupProduct, setPopupProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const sectionRefs = useRef({});

  // JSON'dan veri çek
  useEffect(() => {
    fetch("http://localhost:8081/coffeemenu")
      .then(response => response.json())
      .then(data => setMenuData(data))
      .catch(error => console.error("Menü verisi alınamadı:", error));
  }, []);

  useEffect(() => {
    if (sectionRefs.current[selectedCategory]) {
      sectionRefs.current[selectedCategory].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [selectedCategory]);

  const handleProductClick = (product) => {
    setPopupProduct(product);
    setIsPopupOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar categories={categories} onSelect={setSelectedCategory} selectedCategory={selectedCategory} />
        <main className="product-area">
          {categories.map((category) => (
            <div key={category} ref={(el) => (sectionRefs.current[category] = el)}>
              {selectedCategory === category && menuData[category] && (
                <MenuSection title={category} products={menuData[category]} onProductClick={handleProductClick} />
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

export default CoffeeMenu;
