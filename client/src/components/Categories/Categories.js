import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Categories.css'

function Categories() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/categories').then((response) => {
      setCategories(response.data)
    })
  }, [])
  return (
    <div className='categories'>
      <div className='container'>
        {categories && categories.map((category, index) => {
          let categoryClass = `category ${(index % 2 == 0)  ? 'category-reverse' : ''}`
          return (
            <div key={index} className={categoryClass}>
              <div className='category-image'>
                <img src={category.imageUrl}></img>
              </div>
              <div className='category-content'>
                <h4>{category.name}</h4>
                <p>{category.description}</p>
                <button>Explore {category.key}</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories