import React from 'react';

const PaymentOptions = () => {
  return (
    <div className="card">
      <h3>Ödeme Yöntemi</h3>
      <div className="payment-option">
        <label>
          <input type="radio" name="payment" defaultChecked />
          <div className="card-info">
            <img src="/anaSayfa/assets/visa.png" alt="Visa" />
            <div>
              <strong>Fatma kredi</strong>
              <p>4345 28•• •••• 36</p>
            </div>
            <button className="edit-btn">Değiştir</button>
          </div>
        </label>
      </div>
      <p className="payment-desc">Sipariş verdiğinizde seçili karttan ödeme alınacaktır.</p>
      <div className="add-payment-buttons">
        <button>+ Kredi/Banka Kartı</button>
      </div>
      <div className="masterpass-info">
        <small>Kart bilgileri MasterPass güvencesiyle saklanmaktadır.</small><br />
        <img src="/anaSayfa/assets/masterpass.png" alt="Masterpass" />
      </div>
    </div>
  );
};

export default PaymentOptions;
