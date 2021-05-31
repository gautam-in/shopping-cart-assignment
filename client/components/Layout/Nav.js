import Link from 'next/link';

import styles from '../../styles/nav.module.scss';
import Cart from '../Cart/Cart';


const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.leftSide}>
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.rightSide_top}>
                    <Link href="/login">SignIn</Link>
                    <Link href="/register">Register</Link>
                </div>
                <Cart />
            </div>
        </nav>
    )
}

export default Nav
