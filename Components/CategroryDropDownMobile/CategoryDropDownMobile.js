import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styles from "./CategoryDropDownMobile.module.scss";
export default function CategoryDropDownMobile(props) {
    const [menuExpand,setMenuExpand]=useState(false);
    const [selectedCat,setSelectedCat]=useState(null);
    const router=useRouter();
    const handleCategoryClick=(id)=>{
        handleMenuExpand();
        if(props.catorgorySelectedId===id){
          router.push('/product');
        }else{
          router.push(`/product/${id}`);
        }
        
      }
    const handleMenuExpand=()=>{
        setMenuExpand(!menuExpand)
    }
    useEffect(()=>{
        let catName=null;
        catName= props.categoriesData.filter((cat)=>{
            if(cat.id===props.catorgorySelectedId){
                return cat;
            }
        })
        if(catName && catName.length){
            setSelectedCat(catName[0].name);
        }
        else{
            setSelectedCat("Select a category to filter")
        }

    },[router.query.categoryId])
  return (
    <div className={styles["topnav"]}>
            <div  className={styles["active"]}>
            {selectedCat}
            <button className={styles["arrow"]} onClick={()=>handleMenuExpand()} aria-label={!menuExpand?"Click to Expand Categories DropDown":"Click to Collapse Categories DropDown"} aria-expanded={menuExpand?"true":"false"}></button></div>
            <div className={menuExpand?`${styles["expand"]}`:""}>
            {props.categoriesData.map((category) => (
        <button
          onClick={() => handleCategoryClick(category.id)}
          key={category.id}
          
        >
          {category.name} <span className='sr-only'>{category.id===props.catorgorySelectedId?"Click to deselect the category filter":"Click to select the category filter"}</span>
        </button>
      ))}
            </div>
    </div>
  )
}
