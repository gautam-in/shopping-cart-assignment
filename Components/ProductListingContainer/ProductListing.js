import Image from 'next/image';
import React, { useContext } from 'react'
import StoreContext from '../../Store/CommonStore';
import CategoryDropDownMobile from '../CategroryDropDownMobile/CategoryDropDownMobile';
import styles from "../ProductListingContainer/ProductListing.module.scss";
import Sidebar from '../Sidebar/Sidebar';
export default function ProductListing(props) {
    const browserWidth=true;
    const ctxVal=useContext(StoreContext);
    const addItemToCart=async(productObj)=>{
        const responseJson= await fetch('http://localhost:5000/addToCart', {
              method: "POST", 
            });
         const response= await responseJson.json(); 
          if(response){
            ctxVal.updateItemToCart(productObj);

          }
        
    }
  return (
    <main className={styles["product-container"]}>
      <Sidebar {...props}></Sidebar>
      <CategoryDropDownMobile {...props}></CategoryDropDownMobile>
      <div className={styles["product-container__card"]}>
        {props.productListingData && props.productListingData.map((product) => (
          <section className={styles["card-container"]} key={product.id}>
          <h2 className={styles["card-container__title"]}>{product.name}</h2>
          <figure className={styles["card-container__image"]}>
            <Image
              src={product.imageURL}
              alt={`Image of ${product.name}`}
              className={`${styles["product-image"]} image-wrapper`}
              height={150}
              width={150}
            />
          </figure>
          <p className={styles["card-container__text"]} title={product.description}>
            {product.description}
          </p>
          <section className={styles["card-container__section"]}>
            
              
                <p className={styles["card-container__section__price"]}>MRP Rs.{product.price}</p>
                <button
                  onClick={() => addItemToCart(product)}
                  className={`${styles["card-container__section__buy-button"]} button-wrapper ${styles["buyButtonDesk"]}`}
                  
                >
                  Buy Now <span className='sr-only'>{product.name} Now @ Rs. {product.price}</span>
                </button>
                <button
                onClick={() => addItemToCart(product)}
                className={`${styles["card-container__section__buy-button"]} button-wrapper ${styles["buyButtonMob"]}`}
                
              >
                Buy <span className='sr-only'>{product.name}</span> Now @ Rs.{product.price}
              </button>
              
            
          </section>
        </section>
        ))}
      </div>
    </main>
  )
}
