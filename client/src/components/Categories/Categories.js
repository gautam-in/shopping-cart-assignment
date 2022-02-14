import React, { useEffect } from 'react';
import styles from "./categories.module.css"
import { getCategoryListAction } from '../../store/reducers/category/action';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Categories() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let categoryList = useSelector((state) => {
        return state.categories
    });

    useEffect(()=> {
        dispatch(getCategoryListAction());
    }, []);
    
    let categoryOutput = categoryList.categories.map((category) => (
      category.enabled ? 
      <div className={styles.category} key={category.id}>
           <div className={styles.category_image}>
               <img src={category.imageUrl} alt={category.name}/>
           </div>
           <div className={styles.category_description}>
               <div className={styles.category_title}>{category.name}</div>
               <div className={styles.category_short_desc}>{category.description}</div>
               <button className={styles.category_button} onClick={() => navigate(`products/${category.id}`)}>{category.name}</button>
           </div>
       </div> : null
    ));

  return (
      <div className={styles.categoryContainer}>
          {categoryOutput}
      </div>
  );
}

