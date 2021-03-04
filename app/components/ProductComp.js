
import React, { useState, useEffect } from 'react';
import Tabs from 'react-responsive-tabs';
import { getProductsDetails, getCategoriesListDetails } from '../api/api';
import { PRODUCT_LABEL_MSG, PRODUCTS_ERROR_MSG, CATEGORIES_ERROR_MSG } from '../constant';
import { images } from './common/Common';
import 'react-responsive-tabs/styles.css';


const ProductComp = (props) => {
    const [productItemsobject, setProductItems] = useState([]);
    const [productTabs, setProductTabs] = useState([])

    /**
     * Similar to componentDidMount and componentDidUpdate:
     */
    useEffect(() => {
        categoriesGetCall();
        productsGetCall();
    }, []);

    /**
   * function for products list data
   */
    const productsGetCall = async () => {
        const response = await getProductsDetails();
        if (response && response.status === 200 && response.data) { // Success 
            setProductItems(
                ...productItemsobject,
                response.data
            )
        }
        else {
            Swal.fire(PRODUCTS_ERROR_MSG, response.message, ERROR)
        }
    }

    /**
   * function for products list Tabing list Data
   */
    const categoriesGetCall = async () => {
        const response = await getCategoriesListDetails();
        if (response && response.status === 200 && response.data) {
            const enabledProductTabsList = response.data.filter(item => item.enabled === true);
            setProductTabs(
                ...productTabs,
                enabledProductTabsList
            )
        }
        else {
            Swal.fire(CATEGORIES_ERROR_MSG, response.message, ERROR)
        }
    }

    /**
     * Function for formation of Tabs and Tabs Content
     */

    const getTabs = () => {
        return productTabs.map((list, index) => ({
            title: list.name,
            getContent: () => {
                return productItemsobject.map(item => {
                    if (list.id === item.category) {
                        return (
                            <div className="product-details-box" key={item.id}>
                                <h5>{item.name}</h5>
                                <div className="product-detail-info">
                                    <img src={images[item.imageURL]} alt={item.sku} />
                                    <p>{item.description}</p>
                                    <div className="price-buy-now">
                                        <span>{PRODUCT_LABEL_MSG.CURRENCY_TEXT + " " + item.price}</span>
                                        <button className="btn" onClick={() => props.addToCartFunction(item)}><span className="desktop-visible">{PRODUCT_LABEL_MSG.BUTTON_TEXT}</span><span className="mobile-visible">{PRODUCT_LABEL_MSG.BUTTON_TEXT_WITH_CURRENCY + item.price}</span></button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            },
            /* Optional parameters */
            key: index,
            tabClassName: 'tab',
            panelClassName: 'panel',
        }));
    }

    return (
        <div className="productWrap">
            <section className="main-product-container floatcontainer">
                <Tabs items={getTabs()} transform={true} transformWidth={760} />
            </section>

        </div>
    )
}
export default ProductComp;