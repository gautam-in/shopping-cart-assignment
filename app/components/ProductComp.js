
import React, { useState, useEffect } from 'react';
import Tabs from 'react-responsive-tabs';
import { getProductsDetails, getCategoriesListDetails } from '../api/api';
import { PRODUCTS_ERROR_MSG, CATEGORIES_ERROR_MSG } from '../constant';
import ProductTileComp from './ProductTileComp';
import 'react-responsive-tabs/styles.css';
import Swal from 'sweetalert2';


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

    const successCallback = response => {
        setProductItems(
            ...productItemsobject,
            response.data
        )
    }
    const failureCallback = error => {
        Swal.fire(PRODUCTS_ERROR_MSG, error.message, ERROR)
    };

    /**
   * function for products list data
   */
    const productsGetCall = () => {
        getProductsDetails(successCallback, failureCallback);
    }

    /**
   * function for products list Tabing list Data
   */
  const successCategoryCallback = response => {
    const enabledProductTabsList = response.data.filter(item => item.enabled === true);
        setProductTabs(
            ...productTabs,
            enabledProductTabsList
        )
    }
    const failureCategoryCallback = error => {
        Swal.fire(CATEGORIES_ERROR_MSG, error.message, ERROR)
    };
    const categoriesGetCall = async () => {
        getCategoriesListDetails(successCategoryCallback, failureCategoryCallback);
        
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
                            <ProductTileComp proItem={item} addToCartFunction={props.addToCartFunction} key={item.id}/>
                            
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
                <Tabs items={getTabs()} transform={true} transformWidth={760} role="tab"/>
            </section>

        </div>
    )
}
export default ProductComp;
