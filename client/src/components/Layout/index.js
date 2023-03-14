import React from 'react';
import { useShopContext } from '../../context';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import classes from './layout.module.scss';
import { Cart } from '../../pages';

export const Layout = () => {
  const { isCartOpen } = useShopContext();

  return (
    <>
      <Cart />
      <div style={{ position: isCartOpen ? 'fixed' : 'inherit', width: '100%' }}>
        <Header />
        <section className={classes.body}>
          <Outlet />
        </section>
        <Footer />
      </div>
    </>
  );
};
