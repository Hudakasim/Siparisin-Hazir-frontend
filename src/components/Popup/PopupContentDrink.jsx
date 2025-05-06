import React, { useState, useEffect } from 'react';

const PopupContentDrink = ({ onSelectionChange }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setQuantity(1); // Yeni seçim yapıldığında sayaç sıfırlanabilir (opsiyonel)
  };

  const increase = () => setQuantity(q => q + 1);
  const decrease = () => setQuantity(q => Math.max(1, q - 1));

  useEffect(() => {
    onSelectionChange({ size: selectedSize, quantity });
  }, [selectedSize, quantity, onSelectionChange]);

  return (
    <>
      <p>İçecek Boyutu Seç:</p>

      {["Small", "Medium (+20₺)", "Large (+30₺)"].map(size => (
        <div key={size} style={{ marginBottom: '10px', textAlign: 'left' }}>
          <input
            type="radio"
            id={size}
            name="drink-size"
            value={size}
            checked={selectedSize === size}
            onChange={() => handleSizeChange(size)}
          />
          <label htmlFor={size}>{size}</label>
        </div>
      ))}

      {/* SADECE SEÇİM YAPILDIĞINDA SAYAC GÖRÜNSÜN */}
      {selectedSize && (
        <div className="quantity-control" style={{ marginTop: '15px' }}>
          <button onClick={decrease}>-</button>
          <span>{quantity}</span>
          <button onClick={increase}>+</button>
        </div>
      )}
    </>
  );
};

export default PopupContentDrink;
