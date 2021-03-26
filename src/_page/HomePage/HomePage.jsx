import React from 'react';
import Header from '../../_components/header/header';
import Footer from '../../_components/footer/footer';
import CarouselComp from '../../_components/Carousel/Carousel';
import ProductList from '../../_components/ProductList/ProductList';

export class HomePage extends React.Component {
    render() {
        return (
            <div >
            <Header />
            <div style={{paddingTop:'2%'}}>
            <CarouselComp />
            </div>
               <ProductList />
            <Footer />
            </div>
        );
    }
}
