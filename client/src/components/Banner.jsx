import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getBannerDetails } from '../redux/Action_creators/BannerActions';
import axios from '../utils/axios';
const Banner = () => {
    const banners = useSelector(state => state.banner.bannerDetails)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('api').then(res=>{
            console.log(res);
        })
        // dispatch(getBannerDetails())
    }, [])
    return (
        <div>
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    {
                        banners.map((item, i) => (
                            <li key={item.order} data-target="#demo" data-slide-to={i} className={i == 0 ? 'active' : ''}></li>
                        ))
                    }
                </ul>
                <div className="carousel-inner">
                    {
                        banners.map((item, i) => (
                            <div key={item.id} className={i == 0 ? 'carousel-item active' : 'carousel-item'}>
                                <img className='img' src={item.bannerImageUrl} alt={item.order} />
                            </div>
                        ))
                    }
                </div>

                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>

            </div>
        </div>
    )
}

export default Banner