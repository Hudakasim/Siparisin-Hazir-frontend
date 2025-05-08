import React from 'react';

const PaymentOptions = ({ paymentMethod, setPaymentMethod, dekont, setDekont }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDekont(file);
    }
  };

  return (
    <div className="card">
      <h3>Ödeme Yöntemi</h3>

      {/* IBAN ile ödeme */}
      <div className={`payment-option ${paymentMethod === "iban" ? "selected" : ""}`}>
        <label>
          <input
            type="radio"
            name="payment"
            value="iban"
            checked={paymentMethod === "iban"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          IBAN ile Ödeme
        </label>
        {paymentMethod === "iban" && (
          <div className="iban-info">
            <p><strong>IBAN:</strong> TR12 3456 7890 1234 5678 0000</p>
            <img src="/images/anasayfa/qr.png" alt="QR Kod" width="150" />
            <p>Lütfen ödemenizi yapıp dekontu yükleyiniz.</p>

            <input type="file" onChange={handleFileChange} accept="image/*" />
            {dekont && <p>Yüklenen Dosya: {dekont.name}</p>}
          </div>
        )}
      </div>

      {/* Kasada ödeme */}
      <div className={`payment-option ${paymentMethod === "kasada" ? "selected" : ""}`}>
        <label>
          <input
            type="radio"
            name="payment"
            value="kasada"
            checked={paymentMethod === "kasada"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Kasada Ödeme
        </label>
        {paymentMethod === "kasada" && (
          <p className="kasada-info">Ödemenizi siparişi teslim alırken kasada yapabilirsiniz.</p>
        )}
      </div>
    </div>
  );
};

export default PaymentOptions;
