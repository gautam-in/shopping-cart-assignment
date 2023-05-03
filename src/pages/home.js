import React from 'react';
import Header from '../components/header';
import Carousel from '../components/carousel';
import Categories from '../components/categories';
import Footer from '../components/footer';
import '../styles/home.scss';
const Home = () => {
    return(
        <>
        <Header />
        <main className="content-container">
        <Carousel/>
        <Categories/>
        </main>
        <Footer />
        
        </>
    )
}

export default Home;