import { useState } from "react";
import { ProductsContainer, ListItem } from "./styles";

const CategoriesMenu = ({ categories, handleCategoryClick }) => {
	const [selectedCategory, setSelectedCategory] = useState("");

	const handleCategoryChange = (categoryId) => {
		const category = selectedCategory === categoryId ? "" : categoryId;

		handleCategoryClick(category);
		setSelectedCategory(category);
	};

	return (
		<ProductsContainer>
			{categories.map(({ id, name }) => (
				<ListItem
					active={selectedCategory === id}
					onClick={() => handleCategoryChange(id)}
					key={id}
				>
					{name}
				</ListItem>
			))}
		</ProductsContainer>
	);
};

export default CategoriesMenu;
