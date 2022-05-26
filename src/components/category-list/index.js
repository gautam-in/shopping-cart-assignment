import { useSelector } from "react-redux";
import CategoryItem from "../category-item";
// import { CategoriesContext } from '../../contexts/categories.context';
import { selectCategories } from "../../store/categories/category.selector";
const CategoryList = () => {

    // const {categories} = useContext(CategoriesContext);
    const categories = useSelector(selectCategories);
    return (
        <div className="categories-container">
            {categories.map((category) => (
                category.enabled && <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    );
}

export default CategoryList;