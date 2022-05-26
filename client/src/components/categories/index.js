import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import './categories.css'
function Categories() {
 const categoriesList = useSelector(state => state.appReducer.categoriesList);
 let navigate = useNavigate();

 const clickHandler = (categoryId) => { 
     navigate(`/products/${categoryId}`);
 }
  return (
    <>
        {categoriesList.map((category, index) => {
            var order = category.order % 2 === 0 ? true : false;
            if (category.order !== -1) {
                return (<section key={index} className="category_container floating_shadow" id={category.id} style={{ flexDirection: order ? "row-reverse" : "row" }}>
                    <img className="category_img" src={category.imageUrl} alt={category} />
                    <div className="category_desc_container">
                        <h3>{category.name}</h3>
                        <p>{category.description}</p>
                        <button className="category_button btn_primary" onClick={() => clickHandler(category.id)}>Explore {category.key}</button>
                    </div>
                </section>)
            }
            return null
             })
        }
    </>
  );
}

export default Categories;
