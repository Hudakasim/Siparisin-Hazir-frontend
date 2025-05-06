// src/pages/YesenMenu.jsx
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../../components/Navbar2';
import Sidebar from '../../components/Menu/Sidebar';
import MenuSection from '../../components/Menu/MenuSection';
import PopupManager from '../../components/Popup/PopupManager';
import '../../styles/menu.css';

const categories = ['Burgerler', 'Atıştırmalık', 'İçecek', 'Sos'];

const menuData = {
  Burgerler: [
    { id: 1, name: 'Klasik Burger', price: '300,00₺', image: '/images/yesen/Klasik.jpg', type: 'burger' },
    { id: 2, name: 'Piliç Burger', price: '300,00₺', image: '/images/yesen/Pilic.jpg', type: 'burger' },
    { id: 3, name: 'Cheeseburger Maxi', price: '300,00₺', image: '/images/yesen/Cheeseburger-Maxi.jpg', type: 'burger' },
    { id: 4, name: 'Mantarlım Burger Maxi', price: '300,00₺', image: '/images/yesen/Mantarlım-Burger-Maxi.jpg', type: 'burger' },
    { id: 5, name: 'Patlıcanlım Burger Maxi', price: '300,00₺', image: '/images/yesen/Patlıcanlım-Burger-Maxi.jpg', type: 'burger' },
    { id: 6, name: 'Acılım Burger Maxi', price: '300,00₺', image: '/images/yesen/Acılım-Burger-Maxi.jpg', type: 'burger' },
    { id: 7, name: 'Kasap Burger Maxi', price: '300,00₺', image: '/images/yesen/Kasap-Burger-Maxi.jpg', type: 'burger' },
    { id: 8, name: 'Steak Burger', price: '300,00₺', image: '/images/yesen/Steak-Burger.jpg', type: 'burger' },
    { id: 9, name: 'Yesen Special Burger', price: '300,00₺', image: '/images/yesen/Yesen-Special-Burger.jpg', type: 'burger' },
    { id: 10, name: 'Yesen Piliç Burger', price: '300,00₺', image: '/images/yesen/Yesen-Piliç-Burger.jpg', type: 'burger' },
    { id: 11, name: 'Yesen Gurme', price: '300,00₺', image: '/images/yesen/Yesen-Gurme.jpg', type: 'burger' },
    { id: 12, name: 'Çıtır Piliç Burger', price: '300,00₺', image: '/images/yesen/Çıtır-Piliç-Burger.jpg', type: 'burger' },
  ],

  Atıştırmalık: [
    { id: 13, name: 'Çıtır Top', price: '150,00₺', image: '/images/yesen/Çıtır-Top.jpg', type: 'side' },
    { id: 14, name: 'Çıtır Piliç Halka', price: '150,00₺', image: '/images/yesen/Çıtır-Piliç-Halka.jpg', type: 'side' },
    { id: 15, name: 'Çıtır Piliç Lokma', price: '150,00₺', image: '/images/yesen/Çıtır-Piliç-Lokma.jpg', type: 'side' },
    { id: 16, name: 'Patates Kızartması', price: '150,00₺', image: '/images/yesen/Patates-Kızartması.jpg', type: 'side' },
    { id: 17, name: 'Mini Mix', price: '150,00₺', image: '/images/yesen/Mini-Mix.jpg', type: 'side' },
  ],

  İçecek: [
    { id: 18, name: 'Cola Turka', price: '30,00₺', image: '/images/yesen/Cola.png'},
    { id: 19, name: 'Limonlu Soda', price: '30,00₺', image: '/images/yesen/Limonlu-Soda.png'},
    { id: 20, name: 'Soda', price: '30,00₺', image: '/images/yesen/Soda.jpg'},
    { id: 21, name: 'Ayran', price: '30,00₺', image: '/images/yesen/Ayran.png' },
    { id: 22, name: 'Su', price: '10,00₺', image: '/images/yesen/Su.jpg'},
  ],

  Sos: [
    { id: 23, name: 'Heinz Ketçap', price: '10,00₺', image: '/images/yesen/Heinz-Ketçap.jpg', type: 'simple' },
    { id: 24, name: 'Heinz Mayonez', price: '10,00₺', image: '/images/yesen/Heinz-Mayonez .jpg', type: 'simple' },
    { id: 25, name: 'Heinz BBQ Sos', price: '10,00₺', image: '/images/yesen/Heinz-BBQ-Sos.jpg', type: 'simple' },
    { id: 26, name: 'Coloroda Ranch Sos', price: '10,00₺', image: '/images/yesen/Coloroda-Ranch-Sos.png', type: 'simple' },
    { id: 27, name: 'Coloroda Acı Sos', price: '10,00₺', image: '/images/yesen/Coloroda-Acı-Sos.png', type: 'simple' },
  ],
};

const YesenMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [popupProduct, setPopupProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const sectionRefs = useRef({});

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

  const handleAddToCart = (productWithSelection) => {
    const { quantity, extras, size } = productWithSelection;

    let extraText = extras?.length ? ` (Ekstra: ${extras.join(", ")})` : '';
    let sizeText = size ? ` (${size})` : '';

    alert(`${quantity} adet ${popupProduct.name}${sizeText}${extraText} sepete eklendi.`);
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
              {selectedCategory === category && (
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
		popupType={popupProduct.type}  // BURASI ÖNEMLİ (burger, drink, side, simple)
		productName={popupProduct.name}  // Ürün ismi
		onClose={() => setIsPopupOpen(false)}
		onAddToCart={handleAddToCart}
	/>
)}


    </>
  );
};

export default YesenMenu;
