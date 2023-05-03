import React, {useState, useEffect} from 'react';
import Header from '../components/header';
import CategoryData from '../server/categories/index.js';
import ProductsData from '../server/products/index';
import SideNav from '../components/sideNav';
import Products from '../components/products';
import '../styles/productList.scss';
  
// import Products from '../components/Products';
import Footer from '../components/footer';

const ProductList = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
      setCategories(CategoryData);
      setProducts(ProductsData);
    }, [])
    return(
    <>
        <Header />
        <div className='product__container'>
        <SideNav categories={categories}/>
        <div className='productItem__container'>

          {
            products?.map((product)=>{
             return  <Products data={product}/>
           })
        }
        </div>
    </div>
     
      
        <Footer/>
        </>
    )
}

export default ProductList;