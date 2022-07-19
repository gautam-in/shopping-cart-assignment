import React from 'react'
import { useProducts } from '../../context/productContext'
import { useNavigate } from 'react-router-dom'
const CategoryItem = ({item}) => {
  
  const navigate = useNavigate()
  const { productState, dispatch } = useProducts()
  const { serverData } = productState
  const redirectToProductPageHandler = () => {
      const filterCategoryData = serverData.filter((cat) => cat.category === item.id);
      dispatch({ type: "SET_PRODUCTS_DATA", payload: filterCategoryData });
      dispatch({type:"SET_CATEGORY_VALUE", payload: item.id});

      navigate("/products")
  }
  return (
    <section className = "flex align-center cat-wrapper box-shadow">
        <div className = "cat-image-wrapper">
            <img srcSet = {`${item.imageUrlSmall} 80w, ${item.imageUrl} 1080w`} sizes = "(max-width:600px) 80px, 1080px" src = {item.imageUrl} alt = {item.key} className = "home-cat-image"/>
        </div>
        <div className = "flex column cat-text-wrapper">
            <h4 >{item.name}</h4>
            <p>{item.description}</p>
            <button className = "btn explore-deals-btn" onClick = { redirectToProductPageHandler } aria-label = {`${item.name} Explore deals`}>Explore deals</button>
        </div>
    </section>
  )
}

export default CategoryItem