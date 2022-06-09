import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import {
  selectorCategory,
  selectorCategoryId,
  selectCategory,
  unselectCategory
} from '../../features/category/categorySlice'
import './Sidebar.css'

function Sidebar() {
  const [categories, setCategories] = useState([])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const selectedCategoryId = useSelector(selectorCategoryId)
  const selectedCategory = useSelector(selectorCategory)
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('http://localhost:3000/categories').then((response) => {
      setCategories(response.data)
    })
  }, [])

  const handleClick = (category) => {
    if (selectedCategoryId === category.id) {
      dispatch(unselectCategory())
    } else {
      dispatch(selectCategory(category))
    }
    setSidebarOpen(!sidebarOpen)
  }

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const sidbarClassName = `sidebar-mobile-content ${sidebarOpen ? '' : 'sidbar-hide'}`

  return (
    <>
      <div className='sidebar'>
        <ul>
          {categories && categories.map((category, index) => {
            let activeClass = `${category.id === selectedCategoryId ? 'active' : ''}`
            return (
              <li key={index} className={activeClass} onClick={() => handleClick(category)}>
                <div>{category.name}</div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='sidebar-mobile'>
        <div className='sidebar-mobile-container'>
          <div className='sidebar-selected-text'>
            {selectedCategory.name || 'Select Category'}
          </div>
          <div className='sidebar-open' onClick={() => handleSidebarOpen()}>
            {sidebarOpen && <FontAwesomeIcon icon={faAngleUp} />}
            {!sidebarOpen && <FontAwesomeIcon icon={faAngleDown} />}
          </div>
        </div>
        <div className={sidbarClassName}>
          <ul>
            {categories && categories.map((category, index) => {
              let activeClass = `${category.id === selectedCategoryId ? 'active' : ''}`
              return (
                <li key={index} className={activeClass} onClick={() => handleClick(category)}>
                  <div>{category.name}</div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
