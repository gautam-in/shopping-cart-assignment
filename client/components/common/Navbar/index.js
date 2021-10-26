import React from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import CartView from "../../cart/CartView";
import { useState } from "react";
import Image from "next/image";
import CartIcon from "./cart.svg";
import Login from "../../auth/";
import LoginView from "../../auth/LoginView";
import { useDispatchStore, useStore } from "../../../public/store";
import useLocalStorage from "../../auth/LoginHooks";
import { useRouter } from "next/router";

export default function Navbar(props) {
  const router = useRouter();
  const { items, total, totalquantity, user, cartOpen, setToggleCart } =
    useStore();
  debugger;
  const dispatch = useDispatchStore();
  const [checkLogin, registerUser, signOutUser] = useLocalStorage();

  const signOut = () => {
    // debugger;
    const userobj = signOutUser(user.user.email);
    if (userobj) {
      if (userobj.message) {
        debugger;
        dispatch({ type: "USER", payload: { user: {} } });
        router.push(`/`);
      }
    }
    //   router.push("/");
  };

  //   const [register, setRegister] = useState(false);

  return (
    <>
      <div>
        <div className={style.nav_container}>
          <nav className={style.navbar}>
            <div>
              <Link href="/">
                <a>
                  <img
                    className={style.imageLogo}
                    src="../../../static/images/logo.png"
                  />
                </a>
              </Link>
            </div>
            <div className={style.navBar_right}>
              <div className={style.LoginLinks}>
                <ul className={style.navbar_ul}>
                  {user?.user ? (
                    <li>
                      <div title={user.user.email} onClick={() => signOut()}>
                        SignOut
                      </div>
                    </li>
                  ) : (
                    <>
                      <li>
                        {" "}
                        <Link href="/signin">
                          <a>SignIn</a>
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link href="/register">
                          <a>Register</a>
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              <div className={style.PageLinks_Container}>
                <div className={style.PageLinks}>
                  <ul className={style.navbar_ul}>
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/products">
                        <a>Products</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className={style.cartIconContainer}
                  onClick={() => setToggleCart()}
                >
                  <div className={style.CartIcon}>
                    <Image
                      classname={style.imgCart}
                      src={CartIcon}
                      alt="Cart Icon"
                    />
                  </div>
                  <div className={style.CartCount}>
                    <span>{`${totalquantity} items`}</span>
                  </div>
                  {/* <CartView hidden={toggleCart} /> */}
                </div>
              </div>
            </div>

            <div>
              {/* <div className="LoginView">
              <Login register={register} signin={signin} />
            </div> */}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
