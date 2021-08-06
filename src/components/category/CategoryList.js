import { useHistory } from "react-router-dom";

const CategoryList = ({ categories }) => {
    const sortedCategories = categories?.sort((a, b) => a.name - b.name);
    const history = useHistory();
    const navigateToProductList = (id) => {
        history.push({
            pathname: `/products/${id}`
        })
    }

    return (
        <>
            {sortedCategories.filter(ele=>ele.enabled).map((category, index) => (
                <div data-testid="category-list" className="each-category-style"
                    style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}
                    key={category.id}>
                    <article className="each-category-text-style">
                        <h2>{category.name}</h2>
                        <p>{category.description}</p>
                        <button data-testid="navigate-products" onClick={() => navigateToProductList(category.id)} className="each-category-button-style">{`Explore ${category.key}`}</button>
                    </article>
                    <picture>
                            <source media="(max-width:550px)" srcSet={category.imageUrlMob} type="image/webp"/>
                            <img className="each-category-image-style" loading="lazy" src={category.imageUrl} alt={category.name} />
                    </picture>
                </div>
                    )
            )}
        </>
            );
}

            export default CategoryList;