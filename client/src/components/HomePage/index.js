import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css';
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@mui/material';

export const HomePage = (props) => {
    const [banners, setBanners] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        ((async () => {
            const bannerList = await (await axios.get('http://localhost:5000/banners')).data;
            const categoryList = await (await axios.get('http://localhost:5000/categories')).data;
            const finalCategoryList = categoryList.filter((category) => category.enabled).sort((categoryA, categoryB) => {
                return categoryA.order - categoryB.order
            });
            setBanners(bannerList);
            setCategories(finalCategoryList)
        })())
    })
    return (
        <div className='home-page-container'>
            <div className="home-page-carousel-container">
                <div className="home-page-carousel" >
                    <Carousel
                        showStatus={false}
                        showThumbs={false}
                        centerMode={true}
                        centerSlidePercentage={70}
                    >
                        {banners.map((banner) => {
                            return (<div id={banner.id} key={banner.id}>
                                <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
                            </div>)
                        })}
                    </Carousel>
                </div>
            </div>
            <div className='home-page-categories-container'>
                {categories.map((category) => {
                    return (
                        <div className='home-page-category-container' key={category.id} >
                            {Math.floor(category.order % 2) === 0 && <div className='home-page-category-content-box'>
                                <div>{category.name}</div>
                                <div>{category.description}</div>
                                <div><button>Explore {category.key}</button></div>
                            </div>}
                            <div className='home-page-category-image-box'>
                                <img className='home-page-category-image' src={category.imageUrl} />
                            </div>
                            {Math.floor(category.order % 2) === 1 &&
                                <div className='home-page-category-content-box'>
                                    <div>{category.name}</div>
                                    <div>{category.description}</div>
                                    <div><Button variant="contained">Explore {category.key}</Button></div>
                                </div>
                            }
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}