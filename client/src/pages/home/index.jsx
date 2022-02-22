import React, { useEffect, useState } from "react";
import { categoriesData } from "../../data/categories";
import { bannersData } from "../../data/banners";

import CategoryList from "../../components/category-list";
import Banners from "../../components/banners";

const Home = () => {
	const [categories, setCategories] = useState([]);
	const [banners, setBanners] = useState([]);

	useEffect(() => {
		const getBanners = async () => {
			let bannersResponse = [];
			await fetch("http://localhost:5000/banners")
				.then((response) => response.json())
				.then((responseJson) => {
					bannersResponse = responseJson;
				})
				.catch((err) => {
					bannersResponse = bannersData;
				});
			const filteredBanners = bannersResponse
				.filter((category) => category.isActive)
				.sort((a, b) => (a.order > b.order ? 1 : -1));

			setBanners(filteredBanners);
		};

		getBanners();

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
	}, []);

	return (
		<>
			<Banners banners={banners} />
			<CategoryList categories={categories} />
		</>
	);
};

export default Home;
