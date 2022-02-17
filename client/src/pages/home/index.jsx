import React, { useEffect, useState } from "react";
// import axios from "axios";
import { categories as categoriesData } from "../../data/categories";
import { bannersData } from "../../data/banners";

import CategoryList from "../../components/category-list";
import Banners from "../../components/banners";

const Home = () => {
	const [categories, setCategories] = useState([]);
	const [banners, setBanners] = useState([]);

	useEffect(() => {
		const getBanners = async () => {
			setBanners(bannersData);
		};

		getBanners();

		const getCategories = async () => {
			// let categories = axios
			// 	.get("http://localhost:5000/categories/")
			// 	.then((res) => {
			// 		console.log(res);
			// 	})
			// 	.catch((err) => console.log(err));
			// fetch("http://localhost:5000/categories", {
			// 	headers: {
			// 		Accept: "application/json",
			// 		"Content-Type": "application/json",
			// 	},
			// 	method: "GET",
			// })
			// 	.then((response) => response.json())
			// 	.then((responseJson) => {
			// 		console.log(responseJson);
			// 	});
			const filteredCategories = categoriesData
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
