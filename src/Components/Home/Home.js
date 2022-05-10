import Banners from './Banners';
import Offers from './Offers';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      <NavigationBar />
      <Banners/>
      <Offers/>
      <Footer />
    </>
  );
}

export default Home;
