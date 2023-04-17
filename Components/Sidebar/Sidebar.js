import { useRouter } from "next/router";
import React from "react";
import styles from "./Sidebar.module.scss";

export default function Sidebar(props) {
  const router = useRouter();
  const handleCategoryClick=(id)=>{
    if(props.catorgorySelectedId===id){
      router.push('/product');
    }else{
      router.push(`/product/${id}`);
    }
    
  }
  return (
    <aside className={styles["sidebar"]}>
      {props.categoriesData.map((category) => (
        <button
          onClick={() => handleCategoryClick(category.id)}
          style={props.catorgorySelectedId===category.id?{backgroundColor:"#d42559",color:"#fff"}:{}}
          key={category.id}
          className={`${styles["sidebar__button"]} button-wrapper`}
        >
          {category.name} <span className='sr-only'>{category.id===props.catorgorySelectedId?"Click to deselect the category filter":"Click to select the category filter"}</span>
        </button>
      ))}
    </aside>
  );
}
