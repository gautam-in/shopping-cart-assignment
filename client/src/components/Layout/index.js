import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import classes from './layout.module.scss';
import { Cart } from '../../pages';

/**
 * The Layout function returns the Cart, Header, Outlet, and Footer components
 * @returns The return statement is returning the JSX that is being rendered.
 */
export const Layout = () => {
  return (
    <>
      <Cart />
      <div >
        <Header />
        <section className={classes.body}>
          <Outlet />
        </section>
        <Footer />
      </div>
    </>
  );
};
