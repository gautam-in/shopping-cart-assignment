import { useNavigate } from "react-router-dom";
import "./category.scss"

// Category component.
const Category = (props) => {
    let navigate = useNavigate();

    // Method to navigate products.
    const onCategoryClick = (categoryId) => {
        navigate(`/products/${categoryId}`);
    }

    // render category list.
    return (<>
        {props.categoryData.map((category, index) => {
            var order = category.order % 2 == 0 ? true : false;
            if (category.order != -1)
                return (<section key={index} className="category-container" id={category.id} style={{ flexDirection: order ? "row-reverse" : "row" }}>
                    <img className="category-img" src={category.imageUrl} />
                    <div className="category-inner-container">
                        <h5>{category.name}</h5>
                        <p>{category.description}</p>
                        <button className="category-button" onClick={() => onCategoryClick(category.id)}>Explore {category.key}</button>
                    </div>
                </section>)
            })
        }
    </>)
}

export default (Category);