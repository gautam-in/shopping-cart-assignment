import React, { Component } from 'react';
import "../styles/index.scss"

import CategoriesSection from "./CategoriesSection"
import SlickSlider from "./SlickSlider"


class Home extends Component {
  render() {
    return (
        <>
          <SlickSlider />
          <CategoriesSection />
        </>
    );
  }
}

export default Home;