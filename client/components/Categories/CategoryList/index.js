import CategoryItem from "../CategoryItem"
import { useSelector } from "react-redux"

export default function CategoryList() {
    const categories = useSelector(state => state.category.allCategories)
    return (
        <div>
            {categories.map(category => <CategoryItem key={category.key} category={category}/>)}
        </div>
    )
}