import React, {useEffect, useRef, useState} from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import '../../CSS/productPage.css';
import '../../CSS/tablet.css';
import { storeCartDataLocally, storeCategoryDataLocally, storeProductDataLocally } from '../../Utility/StoreLocally';
import { getProductData, getCategoryData} from '../../ApiRequestData/getAllApiData';
import { useNavigate,useParams } from 'react-router-dom';
import CartView from '../MiniCart';
import { retreiveLocalCartData } from '../../Utility/RetrieveLocalData';


const ProductListing = () => {
  const runUseEffectOnce = useRef(false)
  const [productData, setProductData] = useState([])
  const [typeOfProduct, setProductTypes] = useState([])
  const [filteredProduct, setFilteredProduct] = useState([])
  const [cartElements, setCartElements] = useState([])
  const [viewCart,setViewCart] = useState(false)
  const [forMobileList, setForMobileList] = useState(false)
  // eslint-disable-next-line 
  const [counter, setCounter] = useState(0)
  const navigate = useNavigate()
  const {categoryId} = useParams()


    useEffect(() => {
        if(!runUseEffectOnce.current){
                fetchProductData()
                fetchCategoryData()
                retrieveCartData()
                runUseEffectOnce.current = true
                window.addEventListener('resize', reRenderResol )
        }

            return () => {
                window.removeEventListener('resize', reRenderResol)
            }
    },[])


    useEffect(() => {
        if(!categoryId)
            setFilteredProduct([])
        else if (!!categoryId && !!typeOfProduct.length && !!productData.length)
            filterProduct(categoryId)
           // eslint-disable-next-line
    },[categoryId, typeOfProduct, productData])


    useEffect(() => {
        if(window.innerWidth < `${760}`){
            if(!!forMobileList)
                document.getElementById('sideList').style.display = 'block';
            else
                document.getElementById('sideList').style.display = 'none';
        }
        // eslint-disable-next-line
    },[forMobileList])



    const reRenderResol = () => setCounter(counter => counter + 1)



    const fetchCategoryData = async() => {
        let data = await getCategoryData()
        storeCategoryDataLocally(data)
        setProductTypes(data)
    }

    const fetchProductData = async () => {
        let data = await getProductData()
        storeProductDataLocally(data)
        setProductData(data)
    }

    const filterProduct = (id) =>{
        let urlParams = undefined
        if(!!typeOfProduct.length)
            urlParams = encodeURIComponent(typeOfProduct.find(a => { return (a.id === id)}).id)
        if(!!productData.length){
            let filteredData = productData.filter((a) => {
                return a.category === id
            })
            setFilteredProduct(filteredData)
            navigate(`/products/${urlParams}`)
        }
    }

    const addToCart = (id) => {
        let items = [...cartElements]
        if(!!productData && !!productData.length){
            productData.forEach(i => {
                if(i.id === id)
                items = [...items, {...i,amt: 1}]
            })
        }
        storeCartDataLocally(items)
        setCartElements(items)
    }
   
    const retrieveCartData = () => {
        let data = retreiveLocalCartData()
        if(!!data)
            setCartElements(data)
    }

    
    const showCart = () => {
        !!viewCart ? setViewCart(false) : setViewCart(true)
    }

    const hasBeenAddedToCart = (cartElements, id) =>{
        let flag = false
        cartElements.forEach(element => {
            if(element.id === id)
                flag = true
        });
        return flag
    }

    const closeBtn = () => {setViewCart(false)}

    const openFilterForMobile = () => {
        if(window.innerWidth < `${760}`){
            !!forMobileList ? setForMobileList(false) : setForMobileList(true)
        }
    }


    return (
        <React.Fragment>
            {window.innerWidth < `${760}` && <div onClick={openFilterForMobile} className='hamburger-icon pointer'>☰</div>}
            {!!viewCart && <CartView closeBtn = {closeBtn} updateCartPage = {retrieveCartData}/>}
            <div id='product-listing-body'>
                <Header itemsInCart={!!cartElements && cartElements.length > 0 ? cartElements.length : 0} showCart={showCart}/>
                    <div className='product-wrapper md-12 flex-r'>
                        <div id='sideList' className='side-list offset-md-2 md-3'>
                            <ul>
                                        {window.innerWidth < `${760}` && <li onClick={() => {navigate('/products'); openFilterForMobile()}} id='allProducts' className='each-category pointer semi-bold'>All Products</li>}
                                        {!!typeOfProduct.length && typeOfProduct.map((item) => {
                                            return (
                                                <li name={item.id} key={item.id} onClick={() => {filterProduct(item.id)}} id={item.id} className='each-category pointer semi-bold'>
                                                    {item.name}
                                                </li>
                                            )
                                        })}
                            </ul>
                        </div>
                        <div className='productList md-6'>
                            <div className='flex-r flex-w md-12 list-products'>
                                {!!productData.length && filteredProduct.length === 0 && productData.map((item) => {
                                    return (
                                        <div key={item.id} id={item.id} className='each-product md-3 pointer flex-c align-start justify-spc-around semi-bold'>
                                            <p className='bold'>{item.name}</p>
                                            <div className='img-product' style={{backgroundImage: "url("+item.imageURL+")"}}/>
                                            <p className='product-description'>
                                                {item.description}
                                            </p>
                                            
                                            <div className='flex-r md-12 align-center justify-spc-around price-buy-section'>
                                                <p className='price-section'>MRP Rs {item.price}</p>
                                                {!hasBeenAddedToCart(cartElements, item.id) && <button onClick={() => {addToCart(item.id)}} className='buy-now pointer'>Buy Now</button>}
                                                {!!hasBeenAddedToCart(cartElements, item.id) && <button disabled className='added-now pointer'>Added to cart</button>}
                                            </div>
                                        </div>
                                    )
                                })}
                                {!!filteredProduct.length && filteredProduct.map((item) => {
                                    return (
                                        <div key={item.id} id={item.id} className='each-product md-3 pointer flex-c align-start justify-spc-around semi-bold'>
                                            <p className='bold'>{item.name}</p>
                                            <div className='img-product' style={{backgroundImage: "url("+item.imageURL+")"}}/>
                                            <p className='product-description'>
                                                {item.description}
                                            </p>
                                            
                                            <div className='flex-r md-12 align-center justify-spc-around price-buy-section'>
                                                <p className='price-section'>MRP Rs {item.price}</p>
                                                {!hasBeenAddedToCart(cartElements, item.id) && <button onClick={() => {addToCart(item.id)}} className='buy-now pointer'>Buy Now</button>}
                                                {!!hasBeenAddedToCart(cartElements, item.id) && <button disabled className='added-now pointer'>Added to cart</button>}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default(ProductListing)
