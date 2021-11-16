import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import ProductItem from "../Components/ProductItem";
import Dropdown from '../Components/Dropdown';
import * as productActions from '../store/actions/productAction';
import * as categoryAction from '../store/actions/categoryAction';
import './Product.css';

const Product = () => {

    const products = useSelector(state => state.Products.categoryProducts);
    const categories = useSelector(state => state.Category.categories);
    const selectedCategory = useSelector(state => state.Category.category);
    const selectedCategoryId = useSelector(state => state.Category.categoryId);
    const dispatch = useDispatch();

    const location = useLocation();

    useEffect(()=>{
        if(location.state){
            dispatch(productActions.loadCategoryProducts(selectedCategoryId,selectedCategory));
        }
        else{
            dispatch(productActions.loadProducts());
        }
    },[]);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const handleChooseCategory = (id,categoryName) => {
        dispatch(categoryAction.chooseCategory(id,categoryName));
    }

    const buyNow = (productId) => {
        dispatch(productActions.addToCart(productId));
    }

    return(
        <div className="Products_container">
            <div className="CategoryList_Mobile">
                <Dropdown/>
            </div>
            <div className="CategoryList">
                {categories.map((category)=>{
                    if(category.name === selectedCategory){
                        return <div key={category.id} onClick={()=>handleChooseCategory(category.id,category.name)} style={{cursor:'pointer'}}><h6 style={{backgroundColor:'#D3D3D3'}}>{category.name}</h6><hr/></div>
                    }
                    else{
                        return <div key={category.id} onClick={()=>handleChooseCategory(category.id,category.name)} style={{cursor:'pointer'}}><h6>{category.name}</h6><hr/></div>
                    }
                })}
            </div>
            <div className="ItemContainer">
                {products.map((product)=>{
                    return <ProductItem key={product.id} id={product.id} title={product.name} imagesrc={product.imageURL} price={product.price} description={product.description} buy={buyNow}/>
                })}
            </div>
        </div>
    )
}

export default Product