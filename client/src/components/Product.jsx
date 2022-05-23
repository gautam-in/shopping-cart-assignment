import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getAllProducts, getFilterByCategory, removeStoredProducts } from '../redux/ActionCreators/ProductsActions';
import Card from './Card'
import MobileCard from './MobileCard'
import MobileSidebar from './MobileSidebar'


const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;


const Product = () => {
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch();

    const getProducts=()=>{
        if(searchParams.has('category')){
         dispatch(getFilterByCategory(searchParams.get('category')))
        }
        else{
          dispatch(getAllProducts());
        }
      }

      useEffect(()=>{
        getProducts();
        return ()=>{
          dispatch(removeStoredProducts())
        }
      },[searchParams])

    const [width, setWidth] = useState(getWidth());

    
    const products = useSelector(state => state.products.products);
  
    return (<>
        <div className="container product-list">
            <div className='row'>
                {width < 768 ? <MobileSidebar></MobileSidebar> : <Sidebar></Sidebar>}
                <div className='col-sm-12 col-lg-9'>
                    <div className='row' >
                        {products.length > 0 ?  products.map((product, index) => <div className="col-lg-3 col-sm-6 p-0 pl-2 mb-3" key={product.id}>
                              { width < 768  ? <MobileCard  product={product}></MobileCard>  :<Card product={product}></Card> }
                        
                        </div>) : <div className='no-product'>No product Found</div>}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Product