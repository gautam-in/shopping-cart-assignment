import React from 'react'
import Nav from './Nav'
import styles from '../../styles/header.module.scss'
import Link from 'next/link'

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link href="/">
                      <img src="/static/images/logo.png" alt='img' />
                    </Link>
                </div>
                <Nav />
            </div>
        </header>
    )
}

export default Header