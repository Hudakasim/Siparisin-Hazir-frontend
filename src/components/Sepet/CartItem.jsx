import React from 'react';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {

  const itemTotal = parseFloat(item.price.replace("₺", "").replace(",", ".")) * item.quantity;

  // Ürün adı + boyut + extras birleşimi
  let itemName = item.name;

  // Boyutu temizle (varsa)
  const cleanedSize = item.size ? item.size.replace(/\s?\(\+\d+₺\)/, '') : '';

  if (cleanedSize) {
    itemName += ` (${cleanedSize})`;
  }

  // Extras varsa ekle
  if (item.extras && item.extras.length > 0) {
	const extrasText = item.extras.filter(extra => extra !== item.size);

	if (extrasText.length > 0) {
	  itemName += ` (${extrasText.join(", ")})`;
	}
  }

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h4>{itemName}</h4>
        <p>Birim Fiyat: ₺{item.price}</p>
        <p>Adet: {item.quantity}</p>
        <p><strong>Toplam: ₺{itemTotal.toFixed(2)}</strong></p>

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
