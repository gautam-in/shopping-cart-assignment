import React from 'react'
import Nav from './Nav'
import styles from '../styles/header.module.scss'

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src="/images/logo.png" alt='img' />
                </div>
                <Nav />
            </div>
        </header>
    )
}

export default Header