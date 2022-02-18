import { useEffect, useState } from "react";
import CategoriesMenu from "../../components/categories-menu";
import ProductsList from "../../components/products-list";
import { categoriesData } from "../../data/categories";
import { productsData } from "../../data/products";
import { ProductsContainer } from "./styles";

const ProductsPage = () => {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState({
		initial: [],
		filtered: [],
	});

	useEffect(() => {
		const getCategories = async () => {
			let categoriesResponse = [];
			await fetch("http://localhost:5000/categories")
				.then((response) => response.json())
				.then((responseJson) => {
					categoriesResponse = responseJson;
				})
				.catch((err) => {
					categoriesResponse = categoriesData;
				});
			const filteredCategories = categoriesResponse
				.filter((category) => category.enabled)
				.sort((a, b) => (a.order > b.order ? 1 : -1))
				.map((category, index) => ({
					...category,
					type: index % 2 === 0 ? 2 : 1,
				}));

			setCategories(filteredCategories);
		};

		getCategories();

		const getProducts = async () => {
			let productsResponse = [];
			await fetch("http://localhost:5000/products")
				.then((response) => response.json())
				.then((responseJson) => {
					productsResponse = responseJson;
				})
				.catch((err) => {
					productsResponse = productsData;
				});
			const filteredProducts = productsResponse.filter(
				(category) => category.stock > 0
			);

			setProducts({
				initial: filteredProducts,
				filtered: filteredProducts,
			});
		};

		getCategories();
		getProducts();
	}, []);

	const handleCategoryClick = (categoryId) => {
		if (categoryId) {
			const filteredProducts = products.initial.filter(
				({ category }) => category === categoryId
			);

			setProducts({
				...products,
				filtered: filteredProducts,
			});
		} else {
			setProducts({
				...products,
				filtered: products.initial,
			});
		}
	};

	return (
		<ProductsContainer>
			<CategoriesMenu
				categories={categories}
				handleCategoryClick={handleCategoryClick}
			/>
			<ProductsList products={products.filtered} />
		</ProductsContainer>
	);
};

export default ProductsPage;
