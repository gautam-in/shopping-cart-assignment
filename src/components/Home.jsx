import React, { Component } from 'react';
import "../styles/index.scss"

import CategoriesSection from "./CategoriesSection"
import Footer from "./Footer"
import SlickSlider from "./SlickSlider"


class Home extends Component {
  render() {
    return (
        <>
          <SlickSlider />
          <CategoriesSection />
          <Footer />
        </>
    );
  }
}

export default Home;