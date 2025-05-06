import React from 'react';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>₺{item.price}</p>
        <div className="quantity-control">
          <button onClick={() => onDecrease(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrease(item.id)}>+</button>
        </div>
      </div>
      <button className="remove-item" onClick={() => onRemove(item.id)}>🗑</button>
    </div>
  );
};

export default CartItem;
