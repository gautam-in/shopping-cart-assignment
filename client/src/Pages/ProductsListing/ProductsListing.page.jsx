import { useState,useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';
import {getCategories, getProducts} from '../../redux/actionCreators/dataActionCreators';

import {ProductPageContainer,ProductPageSidebar,
    ProductPageProductsContainer,SideBar,SideBarItem} from './ProductListing.styles';
import Product from "../../Components/Product/Product.component";

const ProductsListing = props => {
    const dispatch = useDispatch();
    const [category,setCategory] = useState('');
    
    const handleClick = (id) => setCategory(id);

    const categories = useSelector(state => state.data.categories);
    useEffect(()=>{
        dispatch(getProducts());

        if(categories.status !== 'success'){
            dispatch(getCategories());
        }
      },[dispatch]);

    return (
        <>
        <ProductPageContainer>
            <ProductPageSidebar>
                <SideBar>
                    <SideBarItem onClick={()=>handleClick('')}>All</SideBarItem>
                    {categories.data && categories.data.map(cat => (
                        <SideBarItem onClick={()=>handleClick(cat.id)} key={cat.key}>{cat.name}</SideBarItem>
                    ))}
                    
                </SideBar>
            </ProductPageSidebar>

            <ProductPageProductsContainer>
                    <Product category={category}/>
            </ProductPageProductsContainer>
        </ProductPageContainer>
        
        </>
    );
}

export default ProductsListing;