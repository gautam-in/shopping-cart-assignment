import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import './plp.style.css'
import CustomButton from '../customButton/CustomButton'
import { useDispatch , useSelector  } from 'react-redux'
import { addItemToCart  } from '../../actions/cart'
import { setProductsData  } from '../../actions/products'


const PLP = () => {
    const [ categories , setCategories ] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState('')
    const dispatch = useDispatch();
    const { products = [] } = useSelector(state=>state.products)
    const [ filteredProducts , setFilteredproducts ] = useState([]);
    
    

    useEffect(()=>{ 
       async function fetchData(){
        const promise1 = await axios.get("http://localhost:5000/categories");
        const promise2 = await axios.get("http://localhost:5000/products");
        const [categories,products] = await Promise.all([promise1,promise2]);
        setCategories(categories?.data)
        dispatch(setProductsData(products?.data))
        setFilteredproducts(products?.data)
        
       } 
       fetchData()
    },[])
          
  return (
    <>
    <aside className='left_nav'>
        {categories.map(({name,id})=>{
            return<a onClick={()=>{
                const selectedCategoryProducts = products.filter(({category})=>category===id);
                const isSecondClick =  filteredProducts.length !== products.length 
                const updatedFilteredProducts = id!==selectedCategory ? selectedCategoryProducts : isSecondClick  ? products : selectedCategoryProducts;
                setFilteredproducts(updatedFilteredProducts)
                setSelectedCategory(id)
            }} className='left_nav_item' key={id}>{name}</a>
        })}

    </aside>
    <div className='products_container'>
        {
            filteredProducts.map((product,index)=>{
                const selectedCategory = product?.imageURL.split('/')[4] 
                const imageUrl = product?.imageURL.split('/')[5];
                
                const imgPath = `../../assets/products/${selectedCategory}/${imageUrl}`;
                
                const isLastRow =  [filteredProducts.length-1,filteredProducts.length-2,filteredProducts.length-3,filteredProducts.length-4].includes(index);
    
                return  <div className={`${isLastRow?'last_product':''} product_card`}>
                    <strong>{product.name}</strong>
                    <img src={imgPath} className='product_card--image' alt={product.name} />
                    <article className='product_description'>
                        {product.description}

                    </article>
                    <div className='product__price-details'>
                        <div className='product_price'>
                        <strong>MRP RS {product.price}</strong>
                    
                        </div>

                    <div className='add-to-cart_button--container'>
                    <CustomButton handleClick={()=>dispatch(addItemToCart(product))}>Buy Now</CustomButton>
                    </div>

                    </div>   

                    

                </div>
            })
        }
       

    </div>
    </>
  )
}

export default PLP