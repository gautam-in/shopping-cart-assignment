import React, { lazy, useEffect, useState } from "react";
import useFetch from '../../utils/hooks/useFetch';
import styles from "./ProductListing.module.scss";
import {NavLink,useParams, useNavigate} from "react-router-dom";




const ProductTile = lazy(() => import("../../components/tiles/productTile/ProductTile"));
const Header = lazy(() => import("../../components/header/Header"));

const ProductListing = () => {
  const{ categoryId } = useParams();  
  const [openModal, setOpenModal] = useState(false);
  const {data:products, loading:bannersLoading, error:bannersError} = useFetch('http://localhost:8080/products');
  const {data:categories, loading:categoriesLoading, error:categoriesError} = useFetch('http://localhost:8080/categories');

  const navigate = useNavigate();
  
  const handleFilter = (id) => {
    setOpenModal(false);
    setTimeout(() => {
        navigate(`/products/${id}`, { replace: true });
      }, 0);
  }
  const filteredProducts = products?.filter((product)=>{
    if(product.category === categoryId)
    {
        return product;
    }
  });

  return (
    <>
      <Header />
        <section className={`${styles.noPadding} pageSection`}>
            <aside className={styles.sidebar} >
                <ul className={styles.categoryList}>
                    {categories?.map((category) => {
                        return(
                            <li key={category.key}><NavLink to={`/products/${category.id}`}>{category.name}</NavLink></li>
                        )
                    })}
                    <li><NavLink to={`/products/all`}>All</NavLink></li>
                </ul>
            </aside>
            <section className={styles.mobileFilter}>
                    <button className={styles.filterBtn} onClick={()=>setOpenModal(true)}>Category Filter {`>`}</button>
            </section>
            <section className={styles.productGrid}>
                {filteredProducts?.length > 0 ? filteredProducts?.map((product)=> {
                    return (
                        <ProductTile product={product} />
                    )
                })
                : products?.map((product)=> {
                    return (
                        <ProductTile product={product} />
                    )
                })}
            </section>
        </section> 

        {openModal && <div className={styles.modalFilter}>
            <button className={styles.modalCloseBtn} onClick={()=>setOpenModal(false)}>X</button>
            <ul className={styles.filterList}>
                {categories?.map((category) => {
                    return(
                        <li key={category.key}><button onClick={()=>{handleFilter(category.id)}}>{category.name}</button></li>
                    )
                })}
                <li><NavLink to={`/products/all`}>All</NavLink></li>
            </ul>
        </div>  
        }
    </>
  );
};

export default ProductListing;