import { useEffect, useState } from "react";
import {useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import { selectCategories } from "../../store/categories/category.selector";
import CategoryNav from "../category-nav";
// import { CategoriesContext } from "../../contexts/categories.context";
import ProductList from "../product-list";

import './products.scss';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    // const {categories} = useContext(CategoriesContext);
    const categories = useSelector(selectCategories);
    const {category} = useParams();

    useEffect(() => {
        if(category && categories.length) {
            const activeCategory = categories.find((item) => item.name.toLowerCase() === category);
            setActiveCategory(activeCategory.id);
        }
    }, [categories]);

    const toggleActiveCategory = (categoryId) => {
        setActiveCategory(activeCategory === categoryId ? 'all' : categoryId);
    }

    useEffect(() => {

    }, []);

    return(
        <div className="products__container">
            <CategoryNav
            toggleActiveCategoryCallback={toggleActiveCategory}
            activeCategory={activeCategory}/>
            <ProductList activeCategory = {activeCategory}/>
        </div>
    );
}

export default Products;