import { useState } from "react";
import CategoryNav from "../../components/category-nav";
import ProductList from "../../components/product-list";

import './products.scss';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const toggleActiveCategory = (event, categoryId) => {
        setActiveCategory(activeCategory === categoryId ? null : categoryId);
    }
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