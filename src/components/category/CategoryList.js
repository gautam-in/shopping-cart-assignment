import { useHistory } from "react-router-dom";

const CategoryList = ({ categories }) => {
    const sortedCategories = categories?.sort((a, b) => a.order - b.order);
    const history = useHistory();
    const navigateToProductList = (id) => {
        history.push({
            pathname: `/products/${id}`
        })
    }

    return (
        <>
            {sortedCategories
                .filter((category) => category.enabled)
                .map((category, index) => (
                    <div className="each-category-style"
                        style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}
                        key={category.id}>
                        <article className="each-category-text-style">
                            <h2>{category.name}</h2>
                            <p>{category.description}</p>
                            <button onClick={()=>navigateToProductList(category.id)} className = "each-category-button-style">{`Explore ${category.key}`}</button>
                        </article>
                        <img className="each-category-image-style" src={category.imageUrl} alt={category.name} />
                    </div>
                )
                )}
        </>
    );
}

export default CategoryList;