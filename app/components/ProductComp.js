
import React, { useState, useEffect } from 'react';
import Tabs from 'react-responsive-tabs';
import axios from 'axios';

import 'react-responsive-tabs/styles.css';


const ProductComp = (props) => {
    const [productItemsobject, setProductItems] = useState([]);
    const productTabs = [
        { name: 'Fruits & Vegetables', category: '5b6899953d1a866534f516e2' },
        { name: 'Bakery Cakes and Dairy', category: '5b6899123d1a866534f516de' },
        { name: 'Beverages', category: '5b675e5e5936635728f9fc30' },
        { name: 'Beauty and Hygiene', category: '5b68994e3d1a866534f516df' },
        { name: 'Baby Care', category: '5b6899683d1a866534f516e0' },
    ];
    /**
     * Similar to componentDidMount and componentDidUpdate:
     */
    useEffect(() => {
        productsGetCall();
    }, []);

    /**
   * function for products list data
   */
    const productsGetCall = () => {
        axios.get('http://localhost:5000/products')
            .then((response) => {
                // Success 
                if (response && response.data) {
                    setProductItems(
                        ...productItemsobject,
                        response.data
                    )
                }
            })
            .catch((error) => {
                alert("Products list get Api Failed to fetch Data" + error)
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

    const getTabs = () => {
        return productTabs.map((list, index) => ({
            title: list.name,
            getContent: () => {
                return productItemsobject.map(item => {
                    if (list.category === item.category) {
                        return (
                            <div className="product-details-box" key={item.id}>
                                <h5>{item.name}</h5>
                                <div className="product-detail-info">
                                    <img src={images[item.imageURL]} alt={item.sku} />
                                    <p>{item.description}</p>
                                    <div className="price-buy-now">
                                        <span>MRP Rs.{item.price}</span>
                                        <button className="btn" onClick={() => props.addToCartFunction(item)}><span className="desktop-visible">Buy Now</span><span className="mobile-visible">Buy Now @ Rs.{item.price}</span></button>
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