import { useCallback } from "react";
import "../Scss/category.scss";

function Category({ category, selectCategory }) {
    const callProductCategory = useCallback((id) => () => {selectCategory(id);},[selectCategory])

    return (
        <div className="category-container">
            <div className="product-image">
                <img
                    className="post-image"
                src={category.imageUrl}
                alt={category.name} />

            </div>
            <div className="category-design">
                <h1 className="heading">{category.name}</h1>
                <p className="desc">{category.description}</p>
                <button className="btn" onClick={callProductCategory(category.id)}>
                    Explore {category.key}
                </button>
            </div>

        </div>
    );
};

export default Category;