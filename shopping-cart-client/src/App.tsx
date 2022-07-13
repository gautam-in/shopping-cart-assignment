import React from 'react';
import {  Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AddCarousel from './components/Carousel';

function App() {
  return (
      <Container fluid className='mx-0 p-0'>
        <Header />
        <AddCarousel />
        <Footer />
      </Container>
  );
}

export default App;
