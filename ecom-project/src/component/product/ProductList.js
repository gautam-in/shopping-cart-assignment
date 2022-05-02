import React,{useEffect} from 'react';
import Sidebar from '../sidebar/Sidebar';
import{useSelector,useDispatch} from "react-redux"
import "./product.css";
import Product from './Product';
import { getAllproduct } from "../../redux/action";

const ProductList=(props)=> {
    // const dispatch=useDispatch()
    // useEffect(()=>{
    //     dispatch(getAllproduct())
    //   },[])
    return (
        <div className="product">
         <Sidebar  />
          <Product />  
        </div>
    );
}

export default ProductList;