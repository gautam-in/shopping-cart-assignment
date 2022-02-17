import { useEffect, useState } from "react";
import CategoriesMenu from "../../components/categories-menu";
import ProductsList from "../../components/products-list";
import { categories as categoriesData } from "../../data/categories";
import { products as productsData } from "../../data/products";
import { ProductsContainer } from "./styles";

const ProductsPage = () => {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState({
		initial: [],
		filtered: [],
	});

	useEffect(() => {
		const getCategories = async () => {
			const filteredCategories = categoriesData
				.filter((category) => category.enabled)
				.sort((a, b) => (a.order > b.order ? 1 : -1))
				.map((category, index) => ({
					...category,
					type: index % 2 === 0 ? 2 : 1,
					selected: false,
				}));

			setCategories(filteredCategories);
		};

		getCategories();
		setProducts({
			initial: productsData,
			filtered: productsData,
		});
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
