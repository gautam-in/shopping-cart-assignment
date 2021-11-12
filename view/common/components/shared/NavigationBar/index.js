// import React from "react";
import Link from "next/link";
import style from "./NavigationBar.module.scss";
import Image from "next/image";
import CartIcon from "./cart.svg";
import { useDispatchStore } from "../../../context/contextProvider";
import { useStore } from "../../../context/productActions";
import useLocalStorage from "../../../hooks/AuthHooks";
import { useRouter } from "next/router";

export default function Navigationbar(props) {
  const router = useRouter();
  const { items, total, totalquantity, user, cartOpen, setToggleCart } =
    useStore();

  const { dispatch } = useDispatchStore();
  const [checkLogin, registerUser, signOutUser] = useLocalStorage();

  const signOut = () => {
    const userobj = signOutUser(user.user.email);
    if (userobj) {
      if (userobj.message) {
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
                    alt="site logo"
                    src="../../../static/images/logo.png"
                    aria-label="site logo"
                    width={`100%`}
                    height={`100%`}
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
                        <Link href="/login">
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
                      className={style.imgCart}
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
