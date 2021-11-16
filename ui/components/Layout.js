import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<div className={styles.MainContainer}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Sabka Bazaar" />
				<meta lang="en" />
				<title>Sabka Bazaar</title>
			</Head>

			<div className={styles.Content}>
				<Header />
				{children}
			</div>

			<div className={styles.Footer}>
				<Footer />
			</div>
		</div>
	);
}
