import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { CategoryContext } from '../context/ProductCategoryContext';
import ProductItem from '../component/fragments/ProductItem';
import SideNav from '../component/fragments/SideNav';
import Alert from '../component/Alert';

const ProductStyles = styled.div`
  display: grid;
  gap: 2rem;
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 34.5%);
    justify-content: end;
    margin-right: 2%;
  }
  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 17.5%);
    margin: 0 9%;
  }
`;

export default function Products() {
  const [productData, setProductData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);

  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState({});

  const history = useHistory();
  const { categoryData } = useContext(CategoryContext);

  React.useEffect(() => {
    (async function getProducts() {
      const data = await fetch('http://localhost:5000/products').then((res) =>
        res.json()
      );
      setProductData(data);
      setFilterData(data);
    })();
  }, []);

  React.useEffect(() => {
    if (history.location.state !== undefined && productData !== []) {
      handleSelect(history.location.state);
    }
  }, [history.location.state, productData]);

  const handleSelect = (e) => {
    const filterName = e.target?.innerText ?? e;
    const filterObj = categoryData.filter((item) => filterName === item.name);
    const tempData =
      filterObj.length &&
      productData.filter((item) => item.category === filterObj[0].id);
    setFilterData(tempData);
  };
  const handleAlert = (type, message) => {
    setAlertData({ type, message });
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <ProductStyles className='Products'>
      {showAlert ? <Alert {...alertData} /> : null}
      <SideNav
        itemNum={productData.length}
        handleSelect={handleSelect}
        categoryData={categoryData}
        selectedFilterVal={history.location.state}
      />
      {filterData.length ? (
        filterData.map((product) =>
          product.stock > 0 ? (
            <ProductItem
              key={product.id}
              product={product}
              handleAlert={handleAlert}
            />
          ) : null
        )
      ) : (
        <h3>No item available</h3>
      )}
    </ProductStyles>
  );
}
