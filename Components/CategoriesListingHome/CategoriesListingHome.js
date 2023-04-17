import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { Fragment } from 'react'
import styles from "../CategoriesListingHome/CategoriesListingHome.module.scss";
export default function CategoriesListingHome(props) {
    const router=useRouter();
  return (
    <>
    {props.categoriesData && props.categoriesData.map((category, index) => (
        <section key={category.id} className={styles["container"]}>
            {category.order % 2 == 0 ? (
            <>
                <div className={`${styles['container__content']} ${styles['content']}`}>
                <h2 className={styles["content__header"]}>{category.name}</h2>
                <p className={styles["content__text"]}>{category.description}</p>
                <button className='button-wrapper' onClick={()=>router.push(`/product/${category.id}`)}>Explore {category.key}</button>
                </div>
              <Image src={category.imageUrl} alt={`${category.name}`} className="image-wrapper" height={150} width={200} 
                sizes="(max-width: 768px) 33vw,
                (max-width: 1200px) 33vw,
                33vw"
              />
            </>
          ) : (
            <>
              <Image src={category.imageUrl} alt={`${category.name}`} className="image-wrapper" height={150} width={200}
              sizes="(max-width: 768px) 33vw,
              (max-width: 1200px) 33vw,
              33vw"
              />
            <div className={`${styles['container__content']} ${styles['content']}`}>
            <h2 className={styles["content__header"]}>{category.name}</h2>
            <p className={styles["content__text"]}>{category.description}</p>
            <button className='button-wrapper' onClick={()=>router.push(`/product/${category.id}`)}>Explore {category.key}</button>
             </div>
            </>
          )}
     
        
        </section>
      ))} 
      </>
   
  )
}
