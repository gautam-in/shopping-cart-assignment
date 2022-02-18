import { useState } from "react";

import Dropdown from "../dropdown";
import {
	CategoriesContainer,
	CategoriesContainerMobile,
	ListItem,
} from "./styles";

const CategoriesMenu = ({ categories, handleCategoryClick }) => {
	const [selectedCategory, setSelectedCategory] = useState("");

	const handleCategoryChange = (categoryId) => {
		const category = selectedCategory === categoryId ? "" : categoryId;

		handleCategoryClick(category);
		setSelectedCategory(category);
	};

	const formattedCatForDropdown = categories.map(({ id, name }) => ({
		value: id,
		text: name,
	}));

	return (
		<>
			<CategoriesContainer>
				{categories &&
					categories.map(({ id, name }) => (
						<ListItem
							active={selectedCategory === id}
							onClick={() => handleCategoryChange(id)}
							key={id}
						>
							{name}
						</ListItem>
					))}
			</CategoriesContainer>
			<CategoriesContainerMobile>
				{formattedCatForDropdown && formattedCatForDropdown.length > 0 && (
					<Dropdown
						items={formattedCatForDropdown}
						handleChange={(id) => handleCategoryChange(id)}
					/>
				)}
			</CategoriesContainerMobile>
		</>
	);
};

export default CategoriesMenu;
