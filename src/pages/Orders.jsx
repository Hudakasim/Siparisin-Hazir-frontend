import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar2";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
      return;
    }

    axios.get("http://localhost:8080/orders")
      .then(response => {
        const userOrders = response.data.filter(order => order.user === user.name);
        setOrders(userOrders);
      })
      .catch(error => {
        console.error("Siparişler alınamadı:", error);
      });
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <h2>Sipariş Geçmişi</h2>
        {orders.length === 0 ? (
          <p>Hiç siparişiniz yok.</p>
        ) : (
          orders.map((order, index) => (
            <div key={index} className="card">
              <p><strong>Tarih:</strong> {order.date}</p>
              <p><strong>Teslimat Saati:</strong> {order.deliveryTime}</p>
              <p><strong>Not:</strong> {order.orderNote || "Yok"}</p>
              <p><strong>Ödeme:</strong> {order.paymentMethod}</p>
              <p><strong>Toplam:</strong> ₺{order.total}</p>

              <h4>Ürünler:</h4>
              <ul>
                {order.items.map((item, i) => (
                  <li key={i}>{item.name} {item.size ? `(${item.size})` : ""} - {item.quantity} adet</li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Orders;
