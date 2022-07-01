import React, { useEffect, useState } from 'react'
import "./Home.css"
import { getFetch } from '../../customHooks/getFetch'
import { CategoryItem } from "./../index-components"
import { useProducts } from '../../context/productContext'

const Home = () => {
    const [bannerData, setBannerData] = useState([])
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0)
    const { productState } = useProducts()
    const { categoryData } = productState
    useEffect(() => {
        (async () => {
            try {
                const bannerServerData = await getFetch("http://localhost:4000/bannersJSON")
                setBannerData(() => bannerServerData)
            }
            catch (e) {
                console.log(e)
            }
        })()
    },[])
    const changeBannerHandler = (index) => {
        setCurrentBannerIndex(() => index)
    }
    const bannerLeftArrowHandler = () => {
        if(currentBannerIndex === 0) {
            setCurrentBannerIndex(() => bannerData.length - 1)
        }
        else {
            setCurrentBannerIndex((prev) => prev - 1)

        }
    }
    const bannerRightArrowHandler = () => {
        if(currentBannerIndex === bannerData.length - 1) {
            setCurrentBannerIndex(() => 0)
        }
        else {
            setCurrentBannerIndex((prev) => prev + 1)

        }
    }
  return (
    <main className = "bg-color">
        <div className = "home-banner-wrapper">
            <img src = {bannerData[currentBannerIndex]?.bannerImageUrl} alt = "offer banner" className = "home-banner-image"/>
            {
                bannerData.map((banner, index) => {
                    return <i className = {`fa-solid fa-circle banner-index-btn ${currentBannerIndex === index ? "banner-active" : ""}`} key = {banner.id} onClick = { () => changeBannerHandler(index) }></i>
                })
            }
            <i className = "fa-solid fa-angle-left banner-left-arrow" onClick = { bannerLeftArrowHandler}></i>
            <i className = "fa-solid fa-angle-right banner-right-arrow" onClick = { bannerRightArrowHandler }></i>
        </div>
        <div className = "flex home-cat-wrapper">
            {
                categoryData.map((item) => {
                    return <CategoryItem key = {item.id} item = {item}/>
                })
            }
        </div>
    </main>
  )
}

export default Home