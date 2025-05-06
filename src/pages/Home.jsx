// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Home/HeroSection';
import BrandMenu from '../components/Home/BrandMenu';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';
import Footer from '../components/Home/Footer';
import '../styles/style.css'


const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BrandMenu />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
