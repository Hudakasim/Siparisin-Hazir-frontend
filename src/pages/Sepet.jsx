import React, { useState, useEffect } from 'react';
import CartList from '../components/Sepet/CartList';
import DeliveryTimeSelector from '../components/Sepet/DeliveryTimeSelector';
import PaymentOptions from '../components/Sepet/PaymentOptions';
import OrderSummary from '../components/Sepet/OrderSummary';
import Navbar from '../components/Navbar2';
import "../styles/sepet.css";
import axios from "axios";

const Sepet = () => {
  const [cartItems, setCartItems] = useState([]);
  const [deliveryTime, setDeliveryTime] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [dekont, setDekont] = useState(null);

  // Kullanıcıyı çek (Giriş yapmış mı kontrol için)
  const user = JSON.parse(localStorage.getItem("user"));

  // Sepeti yükle
  useEffect(() => {
    axios.get("http://localhost:8080/cart")
      .then(response => setCartItems(response.data))
      .catch(error => console.error("Sepet verisi alınamadı:", error));
  }, []);

  const increaseQuantity = (id) => {
    const item = cartItems.find(item => item.id === id);
    const updatedItem = { ...item, quantity: item.quantity + 1 };

    axios.patch(`http://localhost:8080/cart/${id}`, updatedItem)
      .then(() => {
        setCartItems(prev => prev.map(item => item.id === id ? updatedItem : item));
      });
  };

  const decreaseQuantity = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item.quantity <= 1) return;

    const updatedItem = { ...item, quantity: item.quantity - 1 };

    axios.patch(`http://localhost:8080/cart/${id}`, updatedItem)
      .then(() => {
        setCartItems(prev => prev.map(item => item.id === id ? updatedItem : item));
      });
  };

  const removeItem = (id) => {
    axios.delete(`http://localhost:8080/cart/${id}`)
      .then(() => {
        setCartItems(prev => prev.filter(item => item.id !== id));
      });
  };

  const total = cartItems.reduce((acc, item) =>
    acc + (parseFloat(item.price.replace("₺", "").replace(",", ".")) * item.quantity),
    0
  );

  const submitOrder = () => {

    // Giriş yapmış mı kontrolü
    if (!user) {
      alert("Lütfen giriş yapın. Sipariş verebilmek için giriş yapmanız gerekir.");
      window.location.href = "/login";
      return;
    }

    if (total === 0) {
      alert("Sepetiniz boş. Lütfen ürün ekleyin.");
      return;
    }

    if (!deliveryTime) {
      alert("Lütfen teslimat saatini seçin.");
      return;
    }

    if (!paymentMethod) {
      alert("Lütfen ödeme yöntemi seçin.");
      return;
    }

    if (paymentMethod === "iban" && !dekont) {
      alert("Lütfen dekontunuzu yükleyin.");
      return;
    }

    const order = {
      user: user.name,
      items: cartItems,
      total,
      orderNote,
      deliveryTime,
      paymentMethod,
      date: new Date().toLocaleString()
    };

    axios.post("http://localhost:8080/orders", order)
      .then(() => {
        alert("Sipariş başarıyla verildi!");

        const deletePromises = cartItems.map(item =>
          axios.delete(`http://localhost:8080/cart/${item.id}`)
        );

        Promise.all(deletePromises).then(() => {
          setCartItems([]);
          setOrderNote("");
          setDeliveryTime("");
        });
      })
      .catch(error => {
        console.error("Sipariş verme hatası:", error);
        alert("Sipariş verilemedi.");
      });
  };

  return (
    <>
      <Navbar />

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
            <PaymentOptions
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              dekont={dekont}
              setDekont={setDekont}
            />
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
