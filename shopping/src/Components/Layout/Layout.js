import {BrowserRouter as Router} from 'react-router-dom';
import {useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer';
import Routes from '../Routes';
import Sidebar from '../Sidebar';
import './Layout.scss';

const Layout = () => {
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const cartSlideOpen = () => {
    setIsSlideOpen(!isSlideOpen);
  };
  return (
    <div>
      <Header cartSideNav={cartSlideOpen} />
      <Router>
        
        <div>
          <Sidebar isSlideOpen={isSlideOpen} cartSideNav={cartSlideOpen} />
          <Routes />
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;
