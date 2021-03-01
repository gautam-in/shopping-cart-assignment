import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';

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
    const bannerGetCall = () => {
        axios.get('http://localhost:5000/banners')
            .then((response) => {
                // Success 
                if (response && response.data) {
                    setBannersObject(
                        ...bannersObject,
                        response.data
                    )
                }
            })
            .catch((error) => {
                alert("Banner list get Api Failed to fetch Data" + error)
            })
    }
    /**
    * function for products list Data
    */
    const productGetCall = () => {
        axios.get('http://localhost:5000/categories')
            .then((response) => {
                // Success 
                if (response && response.data) {
                    setProductsObject(
                        ...productsObject,
                        response.data
                    )
                }
            })
            .catch((error) => {
                alert("Product list get Api Failed to Fetch Data" + error)
            })
    }


    /**
     * Code for load Dyanamic Image Urls without importing each image files
     */
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '../images/')] = r(item); });
        return images;
    }
    /**
     * Use Importall and webpack Require.context('directory', useSubdirectories: boolean, regExp)
     */
    const images = importAll(require.context('../images/', true, /\.(png|jpe?g|svg)$/));

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
                                    <a href="#" className="btn">Explore {item.key}</a>
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