import React from 'react';

const OrderSummary = ({ total, orderNote, setOrderNote, onSubmitOrder }) => {
  return (
    <div className="card">
      <h3>Sipariş Notu</h3>
      <textarea
        placeholder="Ekstra ketçap,mayonez,soğansız vb."
        value={orderNote}
        onChange={(e) => setOrderNote(e.target.value)}
      ></textarea>

      <div className="grand-total">
        Sepet Toplamı: ₺{total.toFixed(2)}
      </div>

      <button className="order-btn" onClick={onSubmitOrder}>Siparişi Ver</button>
    </div>
  );
};

export default OrderSummary;
