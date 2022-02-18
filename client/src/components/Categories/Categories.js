import React, { useEffect } from 'react';
import "./Categories.css"
import { getCategoriesAction } from '../../store/actions/categoryAction';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Categories() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let categoryList = useSelector((state) => {
        return state.categories
    });

    useEffect(()=> {
        dispatch(getCategoriesAction());
    }, [dispatch]);
    
    let categoryOutput = categoryList.categories.map((category) => (
      category.enabled ? 
      <div className="category" key={category.id}>
           <div className="category_image">
               <img src={category.imageUrl} alt={category.name}/>
           </div>
           <div className="category_description">
               <div className="category_title">{category.name}</div>
               <div className="category_short_desc">{category.description}</div>
               <button className="category_button" onClick={() => navigate(`products/${category.id}`)}>{category.name}</button>
           </div>
       </div> : null
    ));

  return (
      <div className="categoryContainer">
          {categoryOutput}
      </div>
  );
}