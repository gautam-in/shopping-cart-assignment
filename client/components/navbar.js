import React from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Navbar.module.scss'
import {useRouter} from "next/router";
import {useSelector} from "react-redux";

const Navbar = () => {
    const router = useRouter();
    const cartQuantity = useSelector(state => state.cart.totalQuantity)
    const goToFirstCategory = () => {
        fetch('http://localhost:5000/api/v1/categories', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            }
        }).then(res => res.json()).then((data) => {
            console.log(data.data);
            router.push(`/category/${data.data[0]._id}/products`)
        })
    }
    return (
        <nav id="primary-nav" aria-label="Main Navigation">
            <div className={styles.nav}>
                <Link href={'/'}>
                    <a><Image src="/logo.png" width={150} alt={'Sabka Bazaar Logo'}
                                  height={77}/>
                    </a>
                </Link>

                <div className={styles.navLinks}>
            <Link href="/">Home</Link>
            <a onClick={goToFirstCategory}>Products</a>
                </div>
                <div className={styles.cartWrapper}>
                    <div className={styles.loginLinks}>
                        <small><Link href="/auth/login">SignIn</Link></small>
                        <small><Link href="/auth/register">Register</Link></small>
                    </div>
                    <Link href={'/cart'}>
                        <div className={styles.cartIcon}>
                            <div className={styles.cartIconImg}>
                                <Image src="/cart.svg" layout={'fill'} alt={'Cart Icon SVG'}/>
                            </div>
                            <span>{cartQuantity} items</span>
                        </div>
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;