import React from "react";
import {useSelector, useDispatch } from "react-redux"
import LazyLoad from 'react-lazyload';

import "../../styles/product-card.scss"

import * as Endpoints from "../Endpoints"
import { handleCart, handleAddItem } from "../../redux/actions"; 

const ProductCard = ({product}) => {
    const cart = useSelector((store) => store.cart);
    const [addItem,setAddItem] = React.useState(false);
    const dispatch = useDispatch();

    const add = () => {
        let axios = require("axios");
        let configurations = {
            method: "POST",
            url: Endpoints.post_add_to_cart,
            headers: {}
        };

        axios(configurations)
        .then((res)=>{
            setAddItem(true);

            setTimeout(()=>{
                setAddItem(false);
            }, 3000);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const addToCart = () => {
        add();
        for(let item of cart){
            if(item.id === product.id) return dispatch(handleAddItem(product));
        }
        return dispatch(handleCart(product));
    }

    const name = product.name;
    const imageUrl = Endpoints.base_uri + product.imageURL;
    const description = product.description;
    const price = product.price;
    const stock = product.stock;
    const category = product.category;
    const id = product.id;
    const sku = product.sku;

    return (
        <div className="product-card">
            <div className="product-title"><h3>{name}</h3></div>
            <div className="product-image">
                <LazyLoad >
                    <img src={imageUrl} alt={name} />
                </LazyLoad>
            </div>
            <div className="product-short-description" alt={description}><span>{description.toString().split('').slice(0, 115).join('')}</span></div>
            <div className="product-card-footer">
                <div className="product-price"><span>MRP Rs.{price}</span></div>
                <div className="buy-button-container">
                    <button className="btn-primary" 
                    onClick={() => {
                        addToCart(product)
                    }}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>      
    );
  }

const ProductsSection = ({pList, catgry}) =>{

        return (
          <>
            <div className="container product_area_container" >
                <div className="grid">
                    {
                        pList.filter((item) => (catgry == null ? true : item.category === catgry))
                        .map((prod) =>
                            <ProductCard key={prod.id.toString()} product={prod} />
                        )
                    }
                </div>
            </div>
          </>
        );
}

export default ProductsSection;