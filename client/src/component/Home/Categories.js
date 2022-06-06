import CategoryItem from './CategoryItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { CategoriesContainer } from './StyledHome';

const Categories = () => {
	const [categoryItems, setCategoryItems] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/categories')
			.then((res) => res.data)
			.then((result) => {
				setCategoryItems(result);
			});
	}, []);

	return (
		<CategoriesContainer>
			{categoryItems.map((categoryItem) =>
				categoryItem.enabled ? (
					<CategoryItem item={categoryItem} key={categoryItem.id} />
				) : null
			)}
		</CategoriesContainer>
	);
};

export default Categories;
