import React, { useState } from 'react';
import CartList from '../components/Sepet/CartList';
import DeliveryTimeSelector from '../components/Sepet/DeliveryTimeSelector';
import PaymentOptions from '../components/Sepet/PaymentOptions';
import OrderSummary from '../components/Sepet/OrderSummary';
import Navbar from '../components/Navbar2';
import "../styles/sepet.css";

const Sepet = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Kasap Burger Maxi",
      price: 300,
      quantity: 1,
      image: "/menuSayfasi/yesen/menu/burgerler/Kasap-Burger-Maxi.jpg"
    }
  ]);

  const [deliveryTime, setDeliveryTime] = useState("");
  const [orderNote, setOrderNote] = useState("");

  const increaseQuantity = (id) => {
    setCartItems(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const submitOrder = () => {
    if (!deliveryTime) {
      alert("Lütfen teslimat saatini seçin.");
      return;
    }

    alert(`🧡 Siparişiniz alındı!\nTeslimat Saati: ${deliveryTime}\nToplam: ₺${total}\nNot: ${orderNote || "Yok"}`);
  };

  return (
    <>
      <Navbar /> {/* ✅ NAVBAR EKLENDİ */}

      <div className="page-wrapper">

        <div className="row">
          <div className="col left">
            <CartList
              items={cartItems}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={removeItem}
            />
          </div>

          <div className="col right">
            <DeliveryTimeSelector value={deliveryTime} onChange={setDeliveryTime} />
          </div>
        </div>

        <div className="row">
          <div className="col left">
            <PaymentOptions />
          </div>

          <div className="col right">
            <OrderSummary
              total={total}
              orderNote={orderNote}
              setOrderNote={setOrderNote}
              onSubmitOrder={submitOrder}
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default Sepet;
