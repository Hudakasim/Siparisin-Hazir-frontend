import React, { useState, useEffect } from 'react';

const PopupContentSimple = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    onQuantityChange({ quantity });
  }, [quantity, onQuantityChange]);

  return (
    <div>
      <p>Adet seçin:</p>
      <div className="quantity-control">
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>
    </div>
  );
};

export default PopupContentSimple;
