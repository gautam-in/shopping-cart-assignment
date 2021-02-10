import React from 'react'
import Card from "./lib/card"
import Banner from "./lib/banner"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.scss"

function Home() {
    let cats=[
        {
          "name": "Beverages",
          "key": "beverages",
          "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
          "enabled": true,
          "order": 3,
          "imageUrl": "/static/images/category/beverages.png",
          "id": "5b675e5e5936635728f9fc30"
        },
        {
          "name": "Bakery Cakes and Dairy",
          "key": "bakery-cakes-dairy",
          "description": "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
          "enabled": true,
          "order": 2,
          "imageUrl": "/static/images/category/bakery.png",
          "id": "5b6899123d1a866534f516de"
        },
        {
          "name": "Beauty and Hygiene",
          "key": "beauty-hygiene",
          "description": "Buy beauty and personal care products online in India at best prices.",
          "enabled": true,
          "order": 4,
          "imageUrl": "/static/images/category/beauty.png",
          "id": "5b68994e3d1a866534f516df"
        },
        {
          "name": "Baby Care",
          "key": "baby",
          "description": "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
          "enabled": true,
          "order": 5,
          "imageUrl": "/static/images/category/baby.png",
          "id": "5b6899683d1a866534f516e0"
        },
        {
          "name": "Seafood",
          "key": "seafood",
          "description": "Great place to buy fresh seafood.",
          "enabled": false,
          "order": -1,
          "id": "5b68997d3d1a866534f516e1"
        },
        {
          "name": "Fruits & Vegetables",
          "key": "fruit-and-veg",
          "description": "A variety of fresh fruits and vegetables.",
          "enabled": true,
          "order": 1,
          "imageUrl": "/static/images/category/fruits.png",
          "id": "5b6899953d1a866534f516e2"
        }
      ]
    let banners=[
        {
          "bannerImageUrl": "/static/images/offers/offer1.jpg",
          "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
          "isActive": true,
          "order": 1,
          "id": "5b6c38156cb7d770b7010ccc"
        },
        {
          "bannerImageUrl": "/static/images/offers/offer2.jpg",
          "bannerImageAlt": "Independence Day Deal - Rs120 off on surf",
          "isActive": true,
          "order": 2,
          "id": "5b6c38336cb7d770b7010ccd"
        },
        {
          "bannerImageUrl": "/static/images/offers/offer3.jpg",
          "bannerImageAlt": "Independence Day Deal - Rs99 off on domex",
          "isActive": true,
          "order": 3,
          "id": "5b6c38456cb7d770b7010cce"
        },
        {
          "bannerImageUrl": "/static/images/offers/offer4.jpg",
          "bannerImageAlt": "Independence Day Deal - Rs99 off on bodywash",
          "isActive": true,
          "order": 4,
          "id": "5b6c38576cb7d770b7010ccf"
        },
        {
          "bannerImageUrl": "/static/images/offers/offer5.jpg",
          "bannerImageAlt": "Independence Day Deal - Rs70 off on tea",
          "isActive": true,
          "order": 5,
          "id": "5b6c386b6cb7d770b7010cd0"
        }
      ]
    return (
       
        <div className="productContainer" >
            <div className="home" >
            <Carousel autoPlay>
                  {
                      banners.map((o)=><Banner o={o}/>)
                  }
            </Carousel> 
            <div >
                {
                    cats.map((c,i)=>{return (
                       
                          <Card c={c} i={i}/>
                        
                       
                        )})
                }
             </div>   
            </div>
        </div>
    )
}

export default Home
