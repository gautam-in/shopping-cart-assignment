import React from 'react';
import './style.css';
import Menu from './components/Menu';
import ImageSlider from './components/ImageSlider';
import Banners from './components/Banners';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page-container">
      <Menu />
      <ImageSlider />
      <Banners />
      <Footer />
    </div>
  );
}
