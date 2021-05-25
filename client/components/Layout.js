import React from 'react'
import Header from './Header'
import styles from '../styles/layout.module.scss'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout