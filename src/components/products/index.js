import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryNav from "../category-nav";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductList from "../product-list";

import './products.scss';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const {categories} = useContext(CategoriesContext);
    const {category} = useParams();

    useEffect(() => {
        if(category && categories.length) {
            const activeCategory = categories.find((item) => item.name.toLowerCase() === category);
            setActiveCategory(activeCategory.id);
        }
    }, [categories]);

    const toggleActiveCategory = (event, categoryId) => {
        setActiveCategory(activeCategory === categoryId ? null : categoryId);
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