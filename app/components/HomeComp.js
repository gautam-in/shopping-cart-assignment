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
    const bannerGetCall = async () => {
        const response = await getbannersListDetails()
        if (response && response.status === 200 && response.data) {
            setBannersObject(
                ...bannersObject,
                response.data
            )
        }
        else {
            Swal.fire(BANNER_ERROR_MSG, response.message, ERROR)
        }
    }
    /**
    * function for products list Data
    */
    const productGetCall = async () => {
        const response = await getCategoriesListDetails();
        if (response && response.status === 200 && response.data) {
            setProductsObject(
                ...productsObject,
                response.data
            )
        }
        else {
            Swal.fire(CATEGORIES_ERROR_MSG, response.message, ERROR)
        }
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