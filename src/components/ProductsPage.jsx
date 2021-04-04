import React, { Component } from 'react';
import "../styles/index.scss"

import Sidebar from "./Sidebar"
import ProductsSection from "./ProductsSection"
import Footer from "./Footer"



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
        <Footer />
        </>
    );
  }
}

export default Home;