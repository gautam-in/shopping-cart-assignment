import React, { useState } from 'react'
import "../../styles/home/Home.css"
import { CategoryItem } from "./../index-components"
import { useProducts } from '../../context/productContext'

const Home = () => {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0)
    const { productState } = useProducts()
    const { categoryData, bannerData } = productState
    const changeBannerHandler = (index) => {
        setCurrentBannerIndex(() => index)
    }
    const bannerLeftArrowHandler = bannerToggleLeftBtn(currentBannerIndex, setCurrentBannerIndex, bannerData)
    const bannerRightArrowHandler = bannerToggleRightBtn(currentBannerIndex, bannerData, setCurrentBannerIndex)
  return (
    <main className = "bg-color" data-testid = "home-page">
        <div className = "home-banner-wrapper box-shadow">
            <div>
                <picture>
                    <source srcSet= {`${bannerData[currentBannerIndex]?.bannerImageUrl}`} media="(min-width: 768px)" className = "home-banner-image"/>
                    <source srcSet= {`${bannerData[currentBannerIndex]?.bannerImageUrlSmall}`} media="(max-width: 767px)" className = "home-banner-image"loading='eager'/>
                    <img src = {`${bannerData[currentBannerIndex]?.bannerImageUrl}`} alt = "offer banner" className = "home-banner-image" loading='eager'/>
                </picture>
            </div>
           
            {
                bannerData.map((banner, index) => {
                    return <i className = {`fa-solid fa-circle banner-index-btn ${currentBannerIndex === index ? "banner-active" : ""}`} key = {banner.id} onClick = { () => changeBannerHandler(index) } data-testid = "banner"></i>
                })
            }
            <i className = "fa-solid fa-angle-left banner-left-arrow" onClick = { bannerLeftArrowHandler} data-testid = "left-slider"></i>
            <i className = "fa-solid fa-angle-right banner-right-arrow" onClick = { bannerRightArrowHandler } data-testid = "right-slider"></i>
        </div>
        <div className = "flex column home-cat-wrapper">
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

export function bannerToggleRightBtn(currentBannerIndex, bannerData, setCurrentBannerIndex) {
    return () => {
        if (currentBannerIndex === bannerData.length - 1) {
            setCurrentBannerIndex(() => 0)
        }
        else {
            setCurrentBannerIndex((prev) => prev + 1)

        }
    }
}

export function bannerToggleLeftBtn(currentBannerIndex, setCurrentBannerIndex, bannerData) {
    return () => {
        if (currentBannerIndex === 0) {
            setCurrentBannerIndex(() => bannerData.length - 1)
        }
        else {
            setCurrentBannerIndex((prev) => prev - 1)

        }
    }
}
