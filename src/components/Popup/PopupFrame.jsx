import React from 'react';
import '../../styles/popup.css';

const PopupFrame = ({ title, onClose, onSubmit, children }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{title}</h2>
        {children}
        <div className="popup-actions">
          <button onClick={onSubmit}>Sepete Ekle</button>
          <button onClick={onClose}>Kapat</button>
        </div>
      </div>
    </div>
  );
};

export default PopupFrame;
