import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import appLogo from "../../../public/images/logo.png";
import Button from "../Button";
import { Cart } from "../Cart";
import styles from "./AppHeader.module.scss";

const AppHeader = () => {
  const router = useRouter();
  const [showCart, setShowCart] = useState(false);
  const isAuthenticated = true;

  const handleCart = () => {
    if (router.asPath === "/cart") {
      return;
    }
    if (window !== undefined && window.innerWidth > 960) setShowCart(true);
    router.push("/cart");
  };

  return (
    <>
      <header className={styles["head-section"]}>
        <div className={styles["app-header"]}>
          <Link href="/">
            <Image
              src={appLogo}
              alt="Sabka Bazaar logo"
              width={190}
              height={86}
            />
          </Link>
          <nav
            aria-labelledby="main-nav"
            className={styles["app-header--home-page-nav"]}
          >
            <div>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/product">Products</Link>
                </li>
              </ul>
            </div>
          </nav>
          <nav aria-labelledby="secondary-nav">
            <div className={styles["app-header--secondary-nav"]}>
              <ul>
                {!isAuthenticated ? (
                  <>
                    <li>
                      <Link href="/login">Sign in</Link>
                    </li>
                    <li>
                      <Link href="/register">Register</Link>
                    </li>
                  </>
                ) : (
                  <li>Sign out</li>
                )}
              </ul>
              <Button
                variant="transparent"
                className={styles["app-header--secondary-nav--cart-btn"]}
                onClick={handleCart}
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
                <p>2 items</p>
              </Button>
            </div>
          </nav>
        </div>
      </header>
      <Cart show={showCart} setShowCart={setShowCart} />
    </>
  );
};

export default AppHeader;
