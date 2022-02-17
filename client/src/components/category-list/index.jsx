import CategoryItem from "../category-card";

const CategoryList = ({ categories }) => {
	return (
		<>
			{categories &&
				categories.map(({ id, type, name, imageUrl, description }) => (
					<CategoryItem
						key={id}
						type={type}
						name={name}
						imageUrl={imageUrl}
						description={description}
					/>
				))}
		</>
	);
};

export default CategoryList;
