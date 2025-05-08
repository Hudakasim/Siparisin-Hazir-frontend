import React, { useState } from 'react';
import axios from 'axios';
import PopupFrame from './PopupFrame';
import PopupContentSimple from './PopupContentSimple';
import PopupContentDrink from './PopupContentDrink';
import PopupContentBurger from './PopupContentBurger';
import PopupContentSide from './PopupContentSide';
import PopupContentMenu from './PopupContectMenu';

const PopupManager = ({ popupType, product, onClose }) => {
  const [selection, setSelection] = useState({});

  if (!product) {
    return null;
  }

  const handleSubmit = () => {

    // Zorunlu seçim kontrolü (içecek ve side için boyut şartı)
    if ((popupType === "drink" || popupType === "side") && !selection.size) {
      alert("Lütfen bir boyut seçin.");
      return;
    }

    // Normal fiyatı al
    let price = parseFloat(product.price.replace("₺", "").replace(",", "."));

    // Seçilen boyuttaki ekstra fiyatı bul (örn: Medium (+20₺))
    const sizeText = selection.size || "";
    const extraPriceMatch = sizeText.match(/\+(\d+)₺/);

    let extraPrice = 0;
    if (extraPriceMatch) {
      extraPrice = parseInt(extraPriceMatch[1]);
    }

    // Ekstra fiyatı ekle
    price += extraPrice;

    const cartItem = {
      productId: product.id,
      name: product.name,
      price: price.toFixed(2) + "₺",
      quantity: selection.quantity || 1,
      size: selection.size || '',
      extras: selection.extras || [],
      image: product.image
    };

    // Önce sepeti getir ve aynı ürün + boyut + extras var mı kontrol et
    axios.get("http://localhost:8080/cart")
      .then(response => {
        const cartItems = response.data;

        const existingItem = cartItems.find(item =>
          item.productId === cartItem.productId &&
          item.size === cartItem.size &&
          JSON.stringify(item.extras) === JSON.stringify(cartItem.extras)
        );

        if (existingItem) {
          // Eğer aynı ürün varsa, quantity arttır
          axios.patch(`http://localhost:8080/cart/${existingItem.id}`, {
            quantity: existingItem.quantity + cartItem.quantity
          }).then(() => {
            alert(`${cartItem.quantity} adet daha eklendi.`);
            onClose();
          });
        } else {
          // Yoksa yeni ürün olarak ekle
          axios.post("http://localhost:8080/cart", cartItem)
            .then(() => {
              alert(`${cartItem.quantity} adet ${cartItem.name} sepete eklendi.`);
              onClose();
            });
        }
      })
      .catch(error => {
        console.error("Sepete ekleme hatası:", error);
      });
  };

  let content;

  switch (popupType) {
    case 'drink':
      content = <PopupContentDrink onSelectionChange={setSelection} />;
      break;
    case 'burger':
      content = <PopupContentBurger onSelectionChange={setSelection} />;
      break;
    case 'side':
      content = <PopupContentSide onSelectionChange={setSelection} />;
      break;
    case 'menu':
      content = <PopupContentMenu onSelectionChange={setSelection} />;
      break;
    default:
      content = <PopupContentSimple onQuantityChange={setSelection} />;
      break;
  }

  return (
    <PopupFrame title={product.name} onClose={onClose} onSubmit={handleSubmit}>
      {content}
    </PopupFrame>
  );
};

export default PopupManager;
