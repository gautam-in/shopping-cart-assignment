import CategoryItem from "../category-item";

const CategoryList = ({ categories }) => {
	return (
		<>
			{categories.map(({ id, type, name, imageUrl, description }) => (
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
