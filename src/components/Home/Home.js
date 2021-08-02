import 'regenerator-runtime/runtime'
import api from '../../constants/api/services'
import React, { useEffect, useState } from "react"
import axiosClient from '../../config/axios-client'
import Carousel from '../Carousel/Carousel'
import { isEmpty } from 'lodash'
const Home = () => {
    const [bannerData, setBannerData] = useState({});
    const [categoryData, setCategoryData] = useState({});
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
      axiosClient.get(api.getBanner)
      .then(response => {
          setBannerData(response.data)
          axiosClient.get(api.getCategories)
          .then(response => {
            setCategoryData(response.data)
            setLoading(false)
          })
          .catch(error => {
              console.log(error)
              setLoading(false)
          })
      })
      .catch(error => {
          console.log(error)
          setLoading(false)
      })
    }, [])

    return (
      <div className="home">
        {isLoading ? (
          <div>Loading.....</div>
        ) : 
        <>  
          {!isEmpty(bannerData) && <Carousel data={bannerData} />}
          <ul className="category-list">
            {!isEmpty(categoryData) > 0 && categoryData.map((category) => {
              return (
                <li key={category.id} className="category">
                <div className="category-details">
                  <div className="category-title">{category.name}</div>
                  <div className="category-description">
                    {category.description}
                  </div>
                  <button
                    type="button"
                    className="category-explore-button"
                    onClick={() => handleExplore(category.id)}
                    tabIndex={0}
                    disabled={!category.enabled}
                    onKeyPress={() => handleExplore(category.id)}
                  >
                    Explore {category.name}
                  </button>
                </div>
                <div className="category-right">
                  <img
                    className="category-image"
                    src={category.imageUrl}
                    alt={category.name}
                    height="150"
                    width="200"
                  />
                </div>
                </li>
              )})}
          </ul>
        </>
        }
      </div>)
}

export default Home