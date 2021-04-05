import {BrowserRouter as Router} from 'react-router-dom';
import {useState} from 'react';
import Header from '../Header';
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
    <>
      <Router>
        <Header cartSideNav={cartSlideOpen} />
        <>
          <Sidebar isSlideOpen={isSlideOpen} cartSideNav={cartSlideOpen} />
          <Routes />
        </>
        <Footer />
      </Router>
    </>
  );
};

export default Layout;
