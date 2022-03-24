import { useCallback } from "react";
import "../Scss/category.scss";

function Category({ category, goselCategory }) {
    const selCategory = useCallback(
        (id) => () => {
            goselCategory(id);
        },
        [goselCategory]
    )

    return (
        <div className="post-component d-flex justify-content-between">
            <div className="image-container">
                <img
                    className="post-image"
                src={category.imageUrl}
                alt={category.name} />

            </div>
            <div className="content">
                <h2 className="heading">{category.name}</h2>
                <p className="desc">{category.description}</p>
                <button className="link-button" onClick={selCategory(category.id)}>
                    Explore {category.key}
                </button>
            </div>

        </div>
    );
};

export default Category;