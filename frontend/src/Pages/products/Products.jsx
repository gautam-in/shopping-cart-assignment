import React,{useEffect, useState} from 'react'
import ProductCart from '../../Components/productCart/ProductCart'
import Sidenav from '../../Components/sidenav/Sidenav'
import {useDispatch, useSelector} from 'react-redux';
import { fetchProductsData } from '../../store/products/productSlice';
import './products.scss'
import { useParams } from 'react-router-dom';


const Products = () => {
  const dispatch=useDispatch();
  const [categoryProduct,setCategoryProduct]= useState([]);
  const {id}= useParams();
  useEffect(()=>{
    dispatch(fetchProductsData());
  },[])
  const data= useSelector(state=>state.products.products.data);
  const currentCategory=useSelector(state=>state.category.categories); 

  useEffect(()=>{
    setCategoryProduct(data);
  },[data])

 
  useEffect(()=>{
    const setData=()=>{ setCategoryProduct(()=>{
      if (id) {
        return data?.filter(item => {
            return item.category === id;
        })
    }
    return data;
    })}
    setData()
  },[id,data]) 
  console.log(id,currentCategory);
  return (
    <div className='product__container'>
        <Sidenav/>
        <div className='productItem__container'>
        
          {
            categoryProduct?.map((product)=>{
             return  <ProductCart data={product}/>
           })
        }
        </div>
    </div>
  )
}

export default Products