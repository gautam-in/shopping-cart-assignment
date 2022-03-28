import { useCallback } from "react";
import "../Scss/category.scss";

function Category({ category, selectCategory }) {
    const callProductCategory = useCallback((id) => () => { selectCategory(id); }, [selectCategory])

    return (
        <section className="category-container">
            <aside className="product-image">
                <img
                    className="post-image"
                    src={category.imageUrl}
                    alt={category.name} />

            </aside>
            <section className="category-design">
                <article>
                    <h1 className="heading">{category.name}</h1>
                    <p className="desc">{category.description}</p>
                </article>
                <button className="btn" onClick={callProductCategory(category.id)}>
                    Explore {category.key}
                </button>
            </section>
        </section>
    );
};

export default Category;