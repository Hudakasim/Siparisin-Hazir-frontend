import React, { useState, useEffect } from 'react';

const PopupContentBurger = ({ onSelectionChange }) => {
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const toggleExtra = (item) => {
    setExtras(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const increase = () => setQuantity(q => q + 1);
  const decrease = () => setQuantity(q => Math.max(1, q - 1));

  useEffect(() => {
    onSelectionChange({ extras, quantity });
  }, [extras, quantity, onSelectionChange]);

  return (
    <>
      <p>Ekstra Malzeme Seç:</p>

      {["Peynir", "Turşu", "Marul", "Mantar"].map(extra => (
        <div key={extra}>
          <input
            type="checkbox"
            id={extra}
            checked={extras.includes(extra)}
            onChange={() => toggleExtra(extra)}
          />
          <label htmlFor={extra}>{extra}</label>
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

export default PopupContentBurger;
