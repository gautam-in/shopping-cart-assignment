import React from "react";
/* import Logo from "../../ahrefms/Logo/Logo"; */
import styles from "./Header.module.scss";

/* import Cart from "../../molecules/Cart/Cart"; */
import Link from "next/link";
import Image from "next/image";
import Cart from "../Cart/Cart";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__sub-container"]}>
        <Link href="/">
        <Image
        src="/static/images/logo.png"
        height={65}
        width={135}
        alt="Sabka bazar logo Image"
        className={styles["logoImage"]}
        />
        </Link>
        <nav className={styles["header__sub-container__nav-items"]}>
          <Link href="/" className={styles["header__sub-container__nav-items__link"]}>
            Home
          </Link>
          <Link
            href="/product"
            className={styles["header__sub-container__nav-items__link"]}
          >
            Products
          </Link>
        </nav>
        <div className={styles["header__sub-container__nav-wrapper"]}>
          <nav className={styles["header__sub-container__nav-wrapper__login"]}>
            <Link
              href="/signin"
              className={styles["header__sub-container__nav-wrapper__login__link"]}
            >
              SignIn
            </Link>
            <Link
              href="/register"
              className={styles["header__sub-container__nav-wrapper__login__link"]}
            >
              Register
            </Link>
          </nav>
          <Cart></Cart>
        </div>
      </div>
    </header>
  );
}
