import React from 'react';
import Banner from '../components/Banner.js';
import CarouselSlider from "../components/CarouselSlider.js"
import Footer from '../components/Footer.js';
import Header from '../components/Header';

export default function Home(props) {
  return (
    <>
    <Header ItemCount={props.ItemCount}/>
    <CarouselSlider/>
    <Banner/>
    <Footer/>
    </>
  );
}
