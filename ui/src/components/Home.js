import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import '../styles/Home.scss'

export default function Home() {
  return (
  <div className='home-container'>
      <Banner />
      <Categories />
  </div>
  );
}
