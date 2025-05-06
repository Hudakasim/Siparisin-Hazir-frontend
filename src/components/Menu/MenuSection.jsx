import React from 'react';
import ProductCard from '../Menu/ProductCard';

const MenuSection = ({ title, products, onProductClick }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="menu-section" id={`menu-${title.toLowerCase()}`}>
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onClick={onProductClick} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
