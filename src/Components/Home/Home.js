import React from 'react'

import { Link} from "react-router-dom";
import Categories from "../../server/categories/index.get.json";
import "./Home.css"
import Carousel from './Carousel';

export default function Home(){

  const filteredCategory = Categories.filter(
    (category) => category.enabled
  ).sort((a, b) => a.order - b.order);


    return(
    <main>
      <Carousel></Carousel>

      {filteredCategory.map((category, index) =>{
        return (

        <section  key={category.key} className={`categories-products ${index%2===0 ?"": "categories-products-reverse"}`}>
        <div className="categories-products-image-container">
          <img
            src={category.imageUrl}
            alt={category.name}
          />
        </div>
        <div className="categories-products-content">
          <h2 className="categories-products-content-heading">{category.name}</h2>
          <p className="categories-products-content-title">
            {category.description}
          </p>
          <Link to={`/products/${category.id}`} className="categories-products-content-button">
            Explore {category.name}
           </Link>
           
        </div>
      </section>
        )

      })}
    </main>

    )
}