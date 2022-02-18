import React from 'react';
import Categories from './Categories';
import Offers from './Offers';

function Home() {
  return(
    <React.Fragment>
      <Offers />
      <Categories />  
    </React.Fragment>
  )
}

export default Home;
