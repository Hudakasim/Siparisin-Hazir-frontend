// src/pages/AkerMenu.jsx
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../../components/Navbar2';
import Sidebar from '../../components/Menu/Sidebar';
import MenuSection from '../../components/Menu/MenuSection';
import PopupManager from '../../components/Popup/PopupManager';
import '../../styles/menu.css'


// Örnek veriler — daha sonra ayrı dosyadan çekilebilir
const categories = ['Kahvaltı', 'Atıştırmalık', 'Dürüm', 'Ana Yemek', 'Pizza ve Hamburger', 'Salatalar'];
const menuData = {
	'Kahvaltı': [
	  { id: 1, name: 'Omlet', price: '80,00₺', image: '/images/aker/kahvalti/omlet.jpeg' , type: 'menu' },
	  { id: 2, name: 'Menemen', price: '90,00₺', image: '/images/aker/kahvalti/menemen.jpg' , type: 'menu' },
	  { id: 3, name: 'Kahvaltı Tabağı', price: '170,00₺', image: '/images/aker/kahvalti/kahvalti.jpeg' , type: 'menu' },
	  { id: 4, name: 'Sandvich', price: '65,00₺', image: '/images/aker/kahvalti/sandwich.jpg' , type: 'menu' },
	  { id: 5, name: 'Tost', price: '90,00₺', image: '/images/aker/kahvalti/tost.jpeg' , type: 'menu' },
	  { id: 6, name: 'Gözleme', price: '100,00₺', image: '/images/aker/kahvalti/gozleme.jpeg' , type: 'menu' },
	  { id: 7, name: 'Fırın Ürünleri', price: '20,00₺', image: '/images/aker/kahvalti/firin.png' , type: 'menu' },
	],
	'Atıştırmalık': [
	  { id: 8, name: 'Patso', price: '70,00₺', image: '/images/aker/atistirmalik/patso.jpg' , type: 'menu' },
	  { id: 9, name: 'Patates', price: '90,00₺', image: '/images/aker/atistirmalik/patates.jpeg' , type: 'menu' },
	  { id: 10, name: 'Soğan Halkası', price: '75,00₺', image: '/images/aker/atistirmalik/sogan-halkasi.jpg' , type: 'menu' },
	  { id: 11, name: 'Kombo Sepeti', price: '140,00₺', image: '/images/aker/atistirmalik/kombo.jpeg' , type: 'menu' },
	  { id: 12, name: 'Etli Sandvich', price: '', image: '/images/aker/atistirmalik/sandvich.jpeg' , type: 'menu' },
	],
	'Dürüm': [
	  { id: 13, name: 'Şinitzel Dürüm', price: '120,00₺', image: '/images/aker/durum/sinitzel.jpg' , type: 'menu' },
	  { id: 14, name: 'Mantarlı Tavuk Dürüm', price: '145,00₺', image: '/images/aker/durum/mantarliTavuk.jpeg' , type: 'menu' },
	  { id: 15, name: 'Döner Dürüm', price: '120,00₺', image: '/images/aker/durum/doner.jpg' , type: 'menu' },
	  { id: 16, name: 'Nugget Dürüm', price: '120,00₺', image: '/images/aker/durum/nuggetSandvich.jpeg' , type: 'menu' },
	  { id: 17, name: 'Köfte Dürüm', price: '150,00₺', image: '/images/aker/durum/kofte.png' , type: 'menu' },
	  { id: 18, name: 'Çıtır Tavuk Dürüm', price: '145,00₺', image: '/images/aker/durum/citir-durum-pasaport-pizza-akcay-.jpg' , type: 'menu' },
	],
	'Ana Yemek': [
	  { id: 19, name: 'Izgara Köfte Tabak', price: '210.00₺', image: '/images/aker/ana_yemekler/izgara-kofte-09.jpg' , type: 'menu' },
	  { id: 20, name: 'Piliç Izgara', price: '180.00₺', image: '/images/aker/ana_yemekler/pilic.jpeg' , type: 'menu' },
	  { id: 21, name: 'Piliç Şinitzel', price: '140.00₺', image: '/images/aker/ana_yemekler/sintizel.jpg' , type: 'menu' },
	  { id: 22, name: 'Köri Soslu Tavuk', price: '190.00₺', image: '/images/aker/ana_yemekler/kori.jpeg' , type: 'menu' },
	  { id: 23, name: 'Soya Soslu Tavuk', price: '190.00₺', image: '/images/aker/ana_yemekler/soya.jpg' , type: 'menu' },
	  { id: 24, name: 'Pilav Üstü Döner', price: '150.00₺', image: '/images/aker/ana_yemekler/pilavDoner.jpeg' , type: 'menu' },
	  { id: 25, name: 'Acılı Moğol Tavuk', price: '190.00₺', image: '/images/aker/ana_yemekler/mogolTavuk.jpg' , type: 'menu' },
	  { id: 26, name: 'Çıtır Tavuk Tabak', price: '180.00₺', image: '/images/aker/ana_yemekler/citir.jpg' , type: 'menu' },
	  { id: 27, name: 'Nugget Tabak', price: '140.00₺', image: '/images/aker/ana_yemekler/nugget.jpeg' , type: 'menu' },
	  { id: 28, name: 'Arabiata Soslu Makarna', price: '140.00₺', image: '/images/aker/ana_yemekler/arabiata.jpg' , type: 'menu' },
	  { id: 29, name: 'Krema - Mantar Tavuk', price: '180.00₺', image: '/images/aker/ana_yemekler/kremaMantar.jpeg' , type: 'menu' },
	  { id: 30, name: 'Mantı', price: '120.00₺', image: '/images/aker/ana_yemekler/mant.jpg' , type: 'menu' },
	],
	'Pizza ve Hamburger': [
	  { id: 32, name: 'Karışık Pizza', price: '165.00₺', image: '/images/aker/pizza_hamburger/pizza-karisik2.jpg' , type: 'menu' },
	  { id: 33, name: 'Sebzeli Pizza', price: '150.00₺', image: '/images/aker/pizza_hamburger/sebzeliPizza.jpg' , type: 'menu' },
	  { id: 34, name: 'Margarita', price: '150.00₺', image: '/images/aker/pizza_hamburger/margarita.jpg' , type: 'menu' },
	  { id: 35, name: 'Hamburger', price: '140.00₺', image: '/images/aker/pizza_hamburger/hamburger.jpeg' , type: 'menu' },
	  { id: 36, name: 'Tavuk Burger', price: '105.00₺', image: '/images/aker/pizza_hamburger/tavukBurger.jpeg' , type: 'menu' },
	  { id: 37, name: 'Cheeseburger', price: '150.00₺', image: '/images/aker/pizza_hamburger/cheeseburger.jpg' , type: 'menu' },
	],
	'Salatalar': [
	  { id: 38, name: 'Tonbalıklı Salata', price: '125.00₺', image: '/images/aker/salatalar/ton.jpeg' , type: 'menu' },
	  { id: 39, name: 'Tavuklu Salata', price: '150.00₺', image: '/images/aker/salatalar/tavuk.jpeg' , type: 'menu' },
	  { id: 40, name: 'Akdeniz Salatası', price: '100.00₺', image: '/images/aker/salatalar/akdeniz.jpeg' , type: 'menu' },
	  { id: 41, name: 'Mevsim Salata', price: '100.00₺', image: '/images/aker/salatalar/mevsim.jpeg' , type: 'menu' },
	  { id: 42, name: 'Çoban Salata', price: '100.00₺', image: '/images/aker/salatalar/coban.jpeg' , type: 'menu' },
	],
  };


const AkerMenu = () => {
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
    console.log('Sepete Eklendi:', productWithSelection);
    alert(`${productWithSelection.quantity} adet ${productWithSelection.name} (${productWithSelection.size}) sepete eklendi.`);
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
			{/* Her kategori için bir ref tanımlanıp, ona scroll yapılacak */}
			{categories.map((category) => (
				<div
				key={category}
				ref={(el) => (sectionRefs.current[category] = el)}
				>
				{/* Sadece seçili kategoriyi gösteriyoruz */}
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

export default AkerMenu;
