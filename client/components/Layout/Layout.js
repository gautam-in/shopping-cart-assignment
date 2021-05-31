import Header from './Header'
import styles from '../../styles/layout.module.scss'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <section className={styles.layout}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </section>
    )
}

export default Layout