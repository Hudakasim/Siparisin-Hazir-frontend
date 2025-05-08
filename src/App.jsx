import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import AkerMenu from './pages/menu/AkerMenu';
import CoffeeMenu from './pages/menu/CoffeeMenu';
import Home from './pages/Home';
import YesenMenu from './pages/menu/YesenMenu';
import Login from "./pages/Login";
import Sepet from './pages/Sepet';
import Orders from './pages/Orders';
import ResetPassword from "./pages/ResetPassword";

import './styles/style.css';

// Background kontrolü yapan component
const BackgroundManager = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let bgUrl = '';

    if (path.includes('/coffee')) {
      bgUrl = "/images/menusayfa/coffee-background.png";
    } else if (path.includes('/aker')) {
      bgUrl = "/images/menusayfa/aker-background.png";
    } else if (path.includes('/yesen')) {
      bgUrl = "/images/menusayfa/yesen-background.png";
    } else {
      bgUrl = "/images/anasayfa/anapage.jpg";
    }

    document.body.style.backgroundImage = `url(${bgUrl})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundColor = 'white';

    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundColor = '';
    };
  }, [location.pathname]);

  return <>{children}</>;
};

const App = () => {
  return (
    <Router>
      <BackgroundManager>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aker" element={<AkerMenu />} />
          <Route path="/coffee" element={<CoffeeMenu />} />
          <Route path="/yesen" element={<YesenMenu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sepet" element={<Sepet />} />
		  <Route path="/orders" element={<Orders />} />
      <Route path="/reset-password" element={<ResetPassword />} />

        </Routes>
      </BackgroundManager>
    </Router>
  );
};

export default App;
