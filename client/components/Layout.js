import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCart, removeFromCart } from '../store/cart';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';

const Layout = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const [totalCount, setTotalCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let count = 0,
      cost = 0;
    Object.keys(products).forEach((p) => {
      count += products[p].count;
      cost = cost + products[p].count * products[p].price;
    });
    setTotalCount(count);
    setTotalCost(cost);
  }, [products]);

  return (
    <>
      <Header
        toggleCart={() => setShowCart(!showCart)}
        cartCount={totalCount}
      />
      <main>
        {showCart && (
          <Cart
            products={Object.keys(products).map((p) => products[p])}
            hideCart={() => setShowCart(false)}
            onAdd={(id) => dispatch(incrementCart(id))}
            onDelete={(id) => dispatch(removeFromCart(id))}
            totalCost={totalCost}
            totalCount={totalCount}
          />
        )}
        <>{children}</>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
