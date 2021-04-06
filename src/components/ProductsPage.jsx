import React, { Component } from 'react';
import "../styles/index.scss"

import Sidebar from "./Sidebar"
import ProductsSection from "./ProductsSection"



class Home extends Component {
  render() {
    return (
        <>
        <section className="product_sec">
            <div className="container">
                <Sidebar />
                <ProductsSection />
            </div>
        </section>
        </>
    );
  }
}

export default Home;