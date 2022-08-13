import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import './plp.style.css'
const PLP = () => {

    const [ categories , setCategories ] = useState([]);
    const [ products , setProducts ] = useState([]);
    const [filteredProducts,setFilteredproducts] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState('')

    

    useEffect(()=>{ 
       async function fetchData(){
        const promise1 = await axios.get("http://localhost:5000/categories");
        const promise2 = await axios.get("http://localhost:5000/products");
        const [categories,products] = await Promise.all([promise1,promise2]);
        setCategories(categories?.data)
        setProducts(products?.data)
        setFilteredproducts(products?.data)
        
       } 
       fetchData()
    },[])
          
  return (
    <div className='plp__container'>
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
            filteredProducts.map((product)=>{
                const selectedCategory = product?.imageURL.split('/')[4] 
                const imageUrl = product?.imageURL.split('/')[5];
                
                const imgPath = `../../assets/products/${selectedCategory}/${imageUrl}`
    
                return  <div className='product_card'>
                    <strong>{product.name}</strong>
                    <img src={imgPath} className='product_card--image' alt={product.name} />
                    <article className='product_description'>
                        {product.description}

                    </article>

                </div>
            })
        }
       

    </div>
    </div>
  )
}

export default PLP