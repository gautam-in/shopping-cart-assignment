import {BrowserRouter as Router} from 'react-router-dom';
import {useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer';
import Routes from '../Routes';
import Cart from '../Cart';
import './Layout.scss';

const Layout = () => {
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const cartSlideOpen = () => {
    setIsSlideOpen(!isSlideOpen);
  };
  return (
    <div>
      
      <Router>
      <Header cartSideNav={cartSlideOpen} />
        <div>
          <Cart isSlideOpen={isSlideOpen} cartSideNav={cartSlideOpen} />
          <Routes  cartSideNav={cartSlideOpen}/>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;
