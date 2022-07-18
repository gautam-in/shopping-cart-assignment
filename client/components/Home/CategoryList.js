import React from 'react';
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import {useRouter} from "next/router";

const CategoryList = ({categories}) => {
    const router = useRouter();
    const getProductsByCategory = (id) => {
        router.push(`/category/${id}/products`)

    }
    return (
        <div className={styles.categories}>
            {categories && categories.map( (category, i) => (<div style={{flexDirection : i % 2 === 1 ? 'row-reverse' : 'row'}} key={category._id} className={styles.categoryCard}>
                <div className={styles.imageDiv}>
                    <Image sizes='15vw' src={'http:localhost:5000/' + category.imageUrl} alt={category.name} width={400} height={250}/>
                </div>
                <div className={styles.categoryName}>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <button onClick={ () => getProductsByCategory(category._id)}>Explore {category.key}</button>
                </div>

            </div>))}
        </div>

    );
};

export default CategoryList;