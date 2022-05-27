import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectorCategory,
  selectCategory,
  unselectCategory
} from '../../features/category/categorySlice'
import './Sidebar.css'

function Sidebar() {
  const [categories, setCategories] = useState([])
  const selectedCategory = useSelector(selectorCategory)
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('http://localhost:3000/categories').then((response) => {
      setCategories(response.data)
    })
  }, [])

  const handleClick = (category) => {
    if (selectedCategory === category.id) {
      dispatch(unselectCategory())
    } else {
      dispatch(selectCategory(category.id))
    }
  }

  return (
    <div className='sidebar'>
      <ul>
        {categories && categories.map((category, index) => {
          let activeClass = `${category.id === selectedCategory ? 'active' : ''}`
          return (
            <li key={index} className={activeClass} onClick={() => handleClick(category)}>
              <div>{category.name}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
