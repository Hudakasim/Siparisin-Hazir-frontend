// src/pages/CoffeeMenu.jsx
import React, { useState, useRef, useEffect } from 'react';
import PopupManager from '../../components/Popup/PopupManager';
import Navbar from '../../components/Navbar2';
import Sidebar from '../../components/Menu/Sidebar';
import MenuSection from '../../components/Menu/MenuSection';
import '../../styles/menu.css';

// Kategoriler
const categories = ['Soğuk Kahveler', 'Sıcak Kahveler', "Refresher's", 'Fruit & Cream Beverage', 'Frozen'];

const menuData = {
  'Soğuk Kahveler': [
    { id: 1, name: 'Iced Americano', price: '90,00₺', image: '/images/coffee/ICED CAFFE AMERICANO.jpg', type: 'drink' },
    { id: 2, name: 'Iced Caffe Latte', price: '145,00₺', image: '/images/coffee/ICED CAFFE LATTE.jpg', type: 'drink' },
    { id: 3, name: 'Caramel Macchiato', price: '190,00₺', image: '/images/coffee/ICED CARAMEL MACCHIATO.jpg', type: 'drink' },
    { id: 4, name: 'Filter Coffee', price: '100,00₺', image: '/images/coffee/ICED FILTER COFFEE.jpg', type: 'drink' },
    { id: 5, name: 'Iced Mocha', price: '190,00₺', image: '/images/coffee/ICED MOCHA.jpg', type: 'drink' },
    { id: 6, name: 'White Mocha', price: '190,00₺', image: '/images/coffee/ICED WHITE MOCHA.jpg', type: 'drink' },
  ],

  'Sıcak Kahveler': [
    { id: 7, name: 'Americano', price: '90,00₺', image: '/images/coffee/Americano.jpg', type: 'drink' },
    { id: 8, name: 'Cappuccino', price: '135,00₺', image: '/images/coffee/Cappuccino.jpg', type: 'drink' },
    { id: 9, name: 'Caramel Macchiato', price: '155,00₺', image: '/images/coffee/CARAMEL MACCHIATO.jpg', type: 'drink' },
    { id: 10, name: 'Espresso', price: '80,00₺', image: '/images/coffee/Espresso.jpg', type: 'drink' },
    { id: 11, name: 'Filter Coffee', price: '100,00₺', image: '/images/coffee/filtreCoffee.jpg', type: 'drink' },
    { id: 12, name: 'Coffee Latte', price: '130,00₺', image: '/images/coffee/Latte.jpg', type: 'drink' },
    { id: 13, name: 'Türk Kahvesi', price: '90,00₺', image: '/images/coffee/TÜRK KAHVESİ.jpg', type: 'drink' },
  ],

  "Refresher's": [
    { id: 14, name: 'Acia Berry Refresher', price: '200,00₺', image: '/images/coffee/Acia-Berry.png', type: 'drink' },
    { id: 15, name: 'Lime Refresher', price: '200,00₺', image: '/images/coffee/Lime.png', type: 'drink' },
    { id: 16, name: 'Mango Refresher', price: '200,00₺', image: '/images/coffee/Mango.png', type: 'drink' },
    { id: 17, name: 'Veri-Berry Refresher', price: '200,00₺', image: '/images/coffee/Ver-Berry.png', type: 'drink' },
  ],

  'Fruit & Cream Beverage': [
    { id: 18, name: 'Italian Cream', price: '200,00₺', image: '/images/coffee/Italian-Cream.png', type: 'drink' },
    { id: 19, name: 'Coconut Cream', price: '200,00₺', image: '/images/coffee/CoconutCream.png', type: 'drink' },
    { id: 20, name: 'Chocolate Cream', price: '200,00₺', image: '/images/coffee/Chocolate-Cream.png', type: 'drink' },
    { id: 21, name: "Strawberry Chocolate Cream", price: '200,00₺', image: "/images/coffee/Strawberry's-chocolate-Cream.png", type: 'drink' },
    { id: 22, name: 'Caramel Waffle Cream', price: '200,00₺', image: '/images/coffee/Caramel-Waffle.png', type: 'drink' },
  ],

  'Frozen': [
    { id: 23, name: 'Mango Frozen', price: '200,00₺', image: '/images/coffee/Mango.jpg', type: 'drink' },
    { id: 24, name: 'Redberry Frozen', price: '200,00₺', image: '/images/coffee/Redberry.jpg', type: 'drink' },
    { id: 25, name: 'Strawberry Frozen', price: '200,00₺', image: '/images/coffee/Strawberry.jpg', type: 'drink' },
  ],
};

const CoffeeMenu = () => {
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
          popupType={popupProduct.type}
          productName={popupProduct.name}
          onClose={() => setIsPopupOpen(false)}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
};

export default CoffeeMenu;
