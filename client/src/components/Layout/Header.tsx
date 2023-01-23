import styles from './layout.module.scss'
import LogoImage from "../../static/images/logo.png"
import CartImage from "../../static/images/cart.svg"

const Logo = () => {
  return (
    <img src={LogoImage} alt="Logo of Sabka Bazaar" />
  )
}
export const Header = () => {
  return (
    <div className={styles.header_container}>
      <header className={styles.header}>
        <Logo />
        <nav className={styles.nav_links}>
          <a href="#">Home</a>
          <a href="#">Products</a>
        </nav>
        <div>
          <div className={styles.right_nav}>
            <nav className={styles.nav_links_auth}>
              <a href="#">SignIn</a>
              <a href="#">Register</a>
            </nav>

            <button>
              <img src={CartImage} alt="" />
              <span>0 items</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
