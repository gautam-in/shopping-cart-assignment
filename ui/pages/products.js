import CategoryFilterList from '../components/CategoryFilter/CategoryFilterList';
import ProductList from '../components/Products/ProductList';
import styles from '../styles/Products.module.css';

export default function Products({ productsData }) {
	return (
		<div className={styles.ProductsContainer}>
			<div className={styles.CategoryFiltorSection}>
				<CategoryFilterList />
			</div>
			<div className={styles.ProductListContainer}>
				<ProductList productsData={productsData} />
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch(`http://localhost:5000/products`);
	const data = await res.json();

	if (!data) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: {
			productsData: data,
		},
		revalidate: 43200,
	};
}
