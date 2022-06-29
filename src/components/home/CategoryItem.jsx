import React from 'react'

const CategoryItem = ({item}) => {
  return (
    <section className = "flex cat-wrapper">
        <div className = "cat-image-wrapper">
            <img src = {item.imageUrl} alt = {item.key} className = "home-banner-image"/>
        </div>
        <div className = "flex cat-text-wrapper">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <button className = "btn explore-deals-btn">Explore deals</button>
        </div>
    </section>
  )
}

export default CategoryItem