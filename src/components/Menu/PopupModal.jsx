// src/components/PopupModal.jsx
import React, { useState } from 'react';

const PopupModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleSubmit = () => {
    if (!size) {
      alert('Lütfen içeceğinizin boyutunu seçin.');
      return;
    }
    onAddToCart({ ...product, quantity, size });
    handleClose();
  };

  const handleClose = () => {
    setQuantity(1);
    setSize('');
    onClose();
  };

  if (!isOpen || !product) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="size-of-drink">
          <p>{product.name} - Boyut Seçin</p>
          <label>
            <input type="radio" value="Small" name="size" onChange={(e) => setSize(e.target.value)} />
            Small
          </label>
          <label>
            <input type="radio" value="Medium" name="size" onChange={(e) => setSize(e.target.value)} />
            Medium (+20)
          </label>
          <label>
            <input type="radio" value="Large" name="size" onChange={(e) => setSize(e.target.value)} />
            Large (+30)
          </label>
        </div>

        <div className="quantity-control">
          <button className="decrease" onClick={() => handleQuantityChange(-1)}>-</button>
          <span id="quantity-value">{quantity}</span>
          <button className="increase" onClick={() => handleQuantityChange(1)}>+</button>
        </div>

        <button className="add-to-cart" onClick={handleSubmit}>Sepete Ekle</button>
        <button className="close-popup" onClick={handleClose}>Kapat</button>
      </div>
    </div>
  );
};

export default PopupModal;
