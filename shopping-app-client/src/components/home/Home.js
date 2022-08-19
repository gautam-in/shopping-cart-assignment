import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CustomButton from '../customButton/CustomButton'
import './home.style.css'
import Carousel from "react-bootstrap/Carousel";
import Metatitlewrapper from '../metatitlewrapper/Metatitlewrapper';


const Home = () => {

const [ categories , setCategories ] = useState([])    
const [ bannerData , setBannerData ] = useState([])    

useEffect(()=>{
    async function getData(){
      const promise1 = await axios.get("http://localhost:5000/categories");
        const promise2 = await axios.get("http://localhost:5000/banners");
        const [categories,banners] = await Promise.all([promise1,promise2]);
        const sortedCategoriesDataByOrder = categories.data.filter(data=>data.order>0).sort((a,b)=>a.order-b.order);
        setCategories(sortedCategoriesDataByOrder)
        setBannerData(banners.data);
        

    } 
    getData()
    
},[])

  return (
    <Metatitlewrapper title={'Sabka Bazzar Home'} description={'fruits, bakery,beverages,beauty and hygiene,baby care'}>
  
    <div className='home_container'>

    
<Carousel>
{bannerData.map(({ id, bannerImageUrl, bannerImageAlt }) => {
  console.log(bannerData,'bd')

const bannerImagePath = bannerImageUrl.split('/')[4]
const imgSrc = `../../assets/offers/${bannerImagePath}`

return (
    

  <Carousel.Item interval={2000}>

    <div key={id}>

      <img

        src={imgSrc}

        alt={bannerImageAlt}

        height="200"

        className="carosel-image"

      />

    </div>

  </Carousel.Item>

);

})}  
</Carousel>

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
    </Metatitlewrapper>
  )
}

export default Home