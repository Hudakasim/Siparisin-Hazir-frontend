import React from 'react';
import CartItem from './CartItem';

const CartList = ({ items, onIncrease, onDecrease, onRemove }) => {
  return (
    <div>
      <h2>Sepetim</h2>
      {items.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        items.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
          />
        ))
      )}
    </div>
  );
};

export default CartList;
