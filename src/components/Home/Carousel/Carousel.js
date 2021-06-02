import React, { useEffect, useState } from 'react'
import {getBanners} from "../../../apiCalls/restCalls"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import "./Carousel.scss"
export default function Gallery() {
    const [baners, setBaners] = useState([])
    const [current, setcurrent] = useState(0)
    const asyncCall = async () => {
        let res = await getBanners()
        setBaners(res.data)
        
    }
    useEffect(() => {
        asyncCall()

    }, [])
 
    const slideRight = () => {
        setcurrent(current === baners.length - 1 ? 0 : current + 1)
    }
    const slideLeft = () => {
        setcurrent(current === 0 ? baners.length - 1 : current - 1)
    }
   
    return (
        <div>
            { baners.length > 0 && <div className="carousel">
                <span className="left-arrow" onClick={slideLeft}><FontAwesomeIcon icon={faArrowAltCircleLeft} /></span>
                <span className="right-arrow" onClick={slideRight}>  <FontAwesomeIcon icon={faArrowAltCircleRight} /></span>

                {baners.map((ban, index) => {
                    return <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && <img
                            src={ban.bannerImageUrl}
                            alt="cart Images"
                            className="image" />}

                    </div>
                })}
            </div>}
        </div>
    )
}
