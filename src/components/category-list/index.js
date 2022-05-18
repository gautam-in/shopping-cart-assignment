import CategoryItem from "../category-item";
const CategoryList = ({categories}) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                category.enabled && <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    );
}

export default CategoryList;