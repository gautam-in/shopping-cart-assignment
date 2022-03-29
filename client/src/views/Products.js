import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import Accordion from '../components/general/Accordion';
import Product from '../components/Products/Product';
import Sidebar from '../components/Products/Sidebar';

// constants
import {
  ACCORRION_MENU_ITEMS,
  BABY_CARE,
  BABY_CARE_CATEGORY_ID,
  BAKERY_CAKES_N_DIARY,
  BAKERY_CAKES_N_DIARY_CATEGORY_ID,
  BEAUTY_N_HYGIENE,
  BEAUTY_N_HYGIENE_CATEGORY_ID,
  BEVERAGES,
  BEVERAGES_CATEGORY_ID,
  FRUITS_N_VEG,
  FRUITS_N_VEG_CATEGORY_ID
} from '../constants';

/**
 * @name Products
 * @returns JSX for Products page
 */
const Products = ({ buyButtonHandler }) => {
  const { name: categoryName } = useParams();

  // states
  const [productPageData, setProductPageData] = useState([]);
  const [filteredProductPageData, setFilteredProductPageData] = useState([]);

  // api calls
  const fetchProductsPageData = () => {
    fetch('http://localhost:8000/api/products')
      .then((response) => response.json())
      .then((response) => processAndSetProductPageDataToState(response))
      .catch((err) => console.error(err));
  };

  /**
   * @name processAndSetProductPageDataToState
   * @param {array} response
   * @description process and sets product data to state
   */
  const processAndSetProductPageDataToState = (response) => {
    const processedResponse = response?.map((e) => {
      return { ...e, noOfPeices: 1 };
    });
    setProductPageData(processedResponse);
    setFilteredProductPageData(processedResponse);
  };

  // call apis at page load
  useEffect(() => {
    fetchProductsPageData();
  }, []);

  // logic for filtering products data based on dynamic route change
  useEffect(() => {
    if (categoryName) {
      const selectedFilter = ACCORRION_MENU_ITEMS.find((item) => item.name === categoryName);
      changeSelectedItem(selectedFilter.id, categoryName);
    }
  }, [categoryName, productPageData]);

  // states
  const [accordionData, setAccordionData] = useState(ACCORRION_MENU_ITEMS);

  const buttonHandler = (cartItems) => {
    buyButtonHandler(cartItems);
  };

  /**
   * @name changeSelectedItem
   * @param {string} id
   * @param {string} category
   * @desc filter and sets product page data to state based on applied filters
   */
  const changeSelectedItem = (id, category) => {
    const data = JSON.parse(JSON.stringify(accordionData));
    data.forEach((item) => (item.id === id ? (item.active = true) : (item.active = false)));
    let filteredData = [];
    switch (category) {
      case FRUITS_N_VEG:
        filteredData = productPageData.filter((data) =>
          data.sku.startsWith(FRUITS_N_VEG_CATEGORY_ID)
        );
        break;
      case BAKERY_CAKES_N_DIARY:
        filteredData = productPageData.filter((data) =>
          data.sku.startsWith(BAKERY_CAKES_N_DIARY_CATEGORY_ID)
        );
        break;
      case BEVERAGES:
        filteredData = productPageData.filter((data) =>
          BEVERAGES_CATEGORY_ID.includes(data.sku.split('-')[0])
        );
        break;
      case BEAUTY_N_HYGIENE:
        filteredData = productPageData.filter((data) =>
          data.sku.startsWith(BEAUTY_N_HYGIENE_CATEGORY_ID)
        );
        break;
      case BABY_CARE:
        filteredData = productPageData.filter((data) => data.sku.startsWith(BABY_CARE_CATEGORY_ID));
        break;
    }
    setFilteredProductPageData(filteredData);
    setAccordionData(data);
  };

  return (
    <div className="products">
      <Accordion accordionData={accordionData} changeSelectedItem={changeSelectedItem} />
      <Sidebar menuItems={accordionData} changeSelectedItem={changeSelectedItem} />
      <Product products={filteredProductPageData} buttonHandler={buttonHandler} />
    </div>
  );
};

Products.propTypes = {
  buyButtonHandler: PropTypes.func
};

export default Products;
