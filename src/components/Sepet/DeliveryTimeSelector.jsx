import React from 'react';

const DeliveryTimeSelector = ({ value, onChange }) => {
  return (
    <div className="card">
      <h3>Teslimat Saatini Seçin</h3>
      <input
        type="time"
        value={value}
        min="08:30"
        max="16:30"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default DeliveryTimeSelector;
