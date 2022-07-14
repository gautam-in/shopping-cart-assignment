import React from "react";
import { Col, Row } from "react-bootstrap";

const categories = [
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
    // {
    //   "name": "Seafood",
    //   "key": "seafood",
    //   "description": "Great place to buy fresh seafood.",
    //   "enabled": false,
    //   "order": -1,
    //   "id": "5b68997d3d1a866534f516e1"
    // },
    {
      "name": "Fruits & Vegetables",
      "key": "fruit-and-veg",
      "description": "A variety of fresh fruits and vegetables.",
      "enabled": true,
      "order": 1,
      "imageUrl": "/static/images/category/fruits.png",
      "id": "5b6899953d1a866534f516e2"
    }
  ];

const Categories = () => { 

    return (<div className="mx-lg-5 mx-md-0 px-md-5 px-2 d-flex flex-column ">
        {categories.map((category, index)=>{
            const {name, key, description, enabled, order, imageUrl, id } = category;
            const idOrderEven = order%2
            return <div key={id} className={`px-md-5 d-flex justify-content-between flex-row${idOrderEven&&'-reverse'} py-3 mt-md-5 order-${order} effect1`}>
                <div style={{textAlign: 'center'}}>
                  <h3 className="font-weight-bold">{name}</h3>
                  <p>{description}</p>
                  <button className="banner-button">{`Explore ${key}`}</button>
                </div>
                <div className="catergory-image-container">
                  <img className="category-image" src={imageUrl}/>
                </div>
            </div>
        })}
    </div>)
}

export default Categories;