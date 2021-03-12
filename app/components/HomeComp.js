import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { getbannersListDetails, getCategoriesListDetails } from '../api/api';
import { BANNER_ERROR_MSG, CATEGORIES_ERROR_MSG, ERROR } from '../constant';
import { images } from './common/Common';
import Swal from 'sweetalert2';

import "react-responsive-carousel/lib/styles/carousel.min.css";


const HomeComp = () => {
    const [bannersObject, setBannersObject] = useState([]);
    const [productsObject, setProductsObject] = useState([]);

    /**
     * Similar to componentDidMount and componentDidUpdate:
     */
    useEffect(() => {
        bannerGetCall();
        productGetCall();
    }, []);

    /**
    * function for banners list data
    */
   const successBannerCallback = response => {
        setBannersObject(
            ...bannersObject,
            response.data
        )
   }
   const failureBannerCallback = error => {
        Swal.fire(BANNER_ERROR_MSG, error.message, ERROR)
   }
    const bannerGetCall = async () => {
        getbannersListDetails(successBannerCallback,failureBannerCallback)
    }
    /**
    * function for products list Data
    */
   const successCategoryCallback = response => {
        setProductsObject(
            ...productsObject,
            response.data
        )
   }
   const failureCategoryCallback = error => {
        Swal.fire(CATEGORIES_ERROR_MSG, error.message, ERROR)
   };
    const productGetCall = async () => {
        getCategoriesListDetails(successCategoryCallback, failureCategoryCallback);
        
    }
    return (
        <div className="homeWrap">
            <section className="slider-section">
                <Carousel autoPlay>
                    {bannersObject.map(item => {
                        return (
                            <div key={item.order}>
                                <img src={images[item.bannerImageUrl]} alt={item.bannerImageAlt} />
                            </div>
                        )
                    })}
                </Carousel>
            </section>
            <section className="product-info-list">
                <ul>
                    {
                        productsObject.map(item => item.enabled && <li key={item.key}>
                            <div className="floatcontainer">
                                <div className="product-image">
                                    <img src={images[item.imageUrl]} alt={item.name} />
                                </div>
                                <div className="product-info">
                                    <h2>{item.name}</h2>
                                    <span>{item.description}</span>
                                    <a href="#" role="button" className="btn">Explore {item.key}</a>
                                </div>
                            </div>
                        </li>)
                    }

                </ul>

            </section>
        </div>
    )
}
export default HomeComp;
