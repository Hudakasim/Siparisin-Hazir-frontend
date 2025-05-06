// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" id={`product-${product.id}`}>
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p className="price">{product.price}</p>
      <button className="to-popup" onClick={() => onClick(product)}>
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;
