import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Sidebar.css'

function Sidebar() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/categories').then((response) => {
      setCategories(response.data)
    })
  }, [])

  const handleClick = (category) => {
    console.log(category)
  }

  return (
    <div className='sidebar'>
      <ul>
        {categories && categories.map((category, index) => {
          return (
            <li key={index} className='' onClick={() => handleClick(category)}>
              <div>{category.name}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
