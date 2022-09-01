/**
 *
 * NavBar
 *
 */
import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styled from 'styled-components/macro';
import size from 'lodash/size';

import { MyCart } from 'app/components/MyCart';
import { CustomContainer } from 'app/components/Container';
import { selectMyCart } from 'app/components/MyCart/selectors';

import { NavStyle } from 'styles/nav-styles';

interface Props {}

export const NavBar = memo((props: Props) => {
  const [open, setOpen] = useState(false);
  const cart = useSelector(selectMyCart);
  return (
    <Div>
      <NavStyle />
      <div className="layout">
        <CustomContainer>
          <div className="container">
            <nav className="nav">
              <section className="nav-logo">
                <img
                  src="/static/images/logo.png"
                  className="nav-logo-img"
                  alt="Sabka Bazaar"
                />
              </section>
              <section className="nav-links">
                <ul>
                  <li>
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/products">
                      Products
                    </Link>
                  </li>
                </ul>
              </section>
              <section className="nav-carts-auth">
                <div className="nav-auth">
                  <ul>
                    <li>
                      <Link className="nav-link" to="/signIn">
                        Signin
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/signUp">
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="nav-carts" onClick={() => setOpen(!open)}>
                  <img
                    src="/static/images/cart.svg"
                    className="cart-icon"
                    alt="Cart Icon"
                    width="35"
                  />
                  <span className="cart-item-count"> {size(cart)} items</span>
                </div>
              </section>
            </nav>
          </div>
        </CustomContainer>
        {open && (
          <div className="cart-container" role="dialog" tabIndex={-1}>
            <div className="container">
              {open && <MyCart open={open} actions={{ setOpen }} />}
            </div>
          </div>
        )}
      </div>
    </Div>
  );
});

const Div = styled.div`
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;
