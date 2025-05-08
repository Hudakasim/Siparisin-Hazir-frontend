import React, { useState, useEffect } from 'react';

const PopupContentAker = ({ onSelectionChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleOptionChange = (event) => {
    const value = event.target.value;

    setSelectedOption({
      size: value,
    });
  };

  const increase = () => setQuantity(q => q + 1);
  const decrease = () => setQuantity(q => Math.max(1, q - 1));

  useEffect(() => {
    if (selectedOption) {
      onSelectionChange({
        size: selectedOption.size,
        extras: selectedOption.extras,
        quantity
      });
    }
  }, [selectedOption, quantity, onSelectionChange]);

  return (
    <>
      <p>Menü Seçimi:</p>

      {["Menu (+50₺)", "Sadece Ürün"].map(option => (
        <div key={option}>
          <input
            type="radio"
            id={option}
            name="aker-menu"
            value={option}
            checked={selectedOption?.size === option}
            onChange={handleOptionChange}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}

      <div className="quantity-control">
        <button onClick={decrease}>-</button>
        <span>{quantity}</span>
        <button onClick={increase}>+</button>
      </div>
    </>
  );
};

export default PopupContentAker;
