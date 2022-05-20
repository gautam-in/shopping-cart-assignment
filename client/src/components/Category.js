import React from 'react'

import './categories.css'

function Category({ categoryname,description,imageUrl,keyname }) {

   
  return (
      
    <section className="categories">
        <img src={imageUrl} alt="offers"  />

        <div className="cat-info">
          <div className="cat-info-contents">
            <h3>{categoryname}</h3>
            <p>{description}</p>
            <button> {"Explore " + keyname}</button>
          </div>
        </div>
      </section>
  )
}

export default Category