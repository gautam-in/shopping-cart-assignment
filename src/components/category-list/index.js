import { useContext } from "react";
import CategoryItem from "../category-item";
import { CategoriesContext } from '../../contexts/categories.context';
const CategoryList = () => {

    const {categories} = useContext(CategoriesContext);

    return (
        <div className="categories-container">
            {categories.map((category) => (
                category.enabled && <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    );
}

export default CategoryList;