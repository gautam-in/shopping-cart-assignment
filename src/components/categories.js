import React,{ useEffect, useState} from 'react';
import CategoryData from '../server/categories/index.js';
import CategoryItem from './categoryItem.js';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      setCategories(CategoryData)
    }, [])
    return(
        <>
        {categories && categories.map((item) => {
            return (
               <CategoryItem key ={item.id} category={item}/>
            )
        })}
        </>
    )
}

export default Categories;
