import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CustomButton from '../customButton/CustomButton'
import './home.style.css'
const Home = () => {

const [ categories , setCategories ] = useState([])    

useEffect(()=>{
    async function getData(){
        const { data : categories = [] } = await axios.get("http://localhost:5000/categories");

        const sortedCategoriesDataByOrder = categories.filter(data=>data.order>0).sort((a,b)=>a.order-b.order);
        setCategories(sortedCategoriesDataByOrder)

    } 
    getData()

},[])

  return (
    <div className='home_container'>
      {
        categories.map((categorie)=>{
          const imageUrl = categorie?.imageUrl.split('/')[4];
          const buttonDescription = `Explore ${categorie?.key.split("-").join(" ")}`
  
          return <div className='product_category' key={categorie?.id}>
          <img className='product__image_container' src={`../../assets/category/${imageUrl}`}  />
            
             <div className='product_details'>
              <strong>{categorie?.name}</strong>
              <p className='category_description'>{categorie?.description}</p>
              <CustomButton>
                {buttonDescription}
    
              </CustomButton>
    
            </div>
    
          </div>
    
        })
      }
      

    </div>
  )
}

export default Home