import { useState,useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';
import {getCategories, getProducts} from '../../redux/actionCreators/dataActionCreators';
import Dropdown from "../../Components/Dropdown/Dropdown.component";

import {ProductPageContainer,ProductPageSidebar,
    ProductPageProductsContainer,SideBar,SideBarItem} from './ProductListing.styles';
import Product from "../../Components/Product/Product.component";

const ProductsListing = props => {
    const dispatch = useDispatch();
    const [category,setCategory] = useState('');
    
    const handleClick = (id) => setCategory(id);

    const data = useSelector(state => state.data);
    useEffect(()=>{
        if(data?.products?.status !== 'success')
        dispatch(getProducts());

        if(data?.categories?.status !== 'success'){
            dispatch(getCategories());
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[dispatch]);

    return (
        <>
        <Dropdown value={category} onChange={(val)=>handleClick(val)}/>
        
        <ProductPageContainer>
            <ProductPageSidebar>
                <SideBar>
                    <SideBarItem onClick={()=>handleClick('')} className={category === '' ? 'active' :''}>All</SideBarItem>
                    {data.categories.data && data.categories.data.map(cat => (
                        <SideBarItem onClick={()=>handleClick(cat.id)} key={cat.key} className={cat.id === category ? 'active' :''}>
                        {cat.name}
                        </SideBarItem>
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