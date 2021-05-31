import React, { useState } from 'react';
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import NotFound from './components/pages/NotFound';
import { Route, Switch, useHistory } from 'react-router-dom';

const Home = React.lazy(() => import('./components/pages/Home'));
const SignInPage = React.lazy(() => import('./components/pages/SignInPage'));
const RegisterPage = React.lazy(() => import('./components/pages/RegisterPage'));
const ProductListingPage = React.lazy(() => import('./components/pages/ProductListingPage'));
const Cart = React.lazy(() => import('./components/organisms/Cart/Cart'));

function App() {
  let history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
    if (window?.innerWidth < 770) {
      setShowModal(true);
      history.push('/cart');
    }
  };

  return (
    <div className='app-container'>
      <Header toggleCartModal={toggleModal} />
      {window?.innerWidth > 770 ? (
        <Cart showCart={showModal} toggleCartModal={toggleModal} />
      ) : null}
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/home' render={() => <Home />} />
        <Route exact path='/products' component={ProductListingPage} />
        <Route exact path='/signin' component={SignInPage} />
        <Route
          exact
          path='/cart'
          render={() => <Cart showCart={showModal} toggleCartModal={toggleModal} />}
        />
        <Route exact path='/register' component={RegisterPage} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
