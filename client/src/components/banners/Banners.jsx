import React, {useState} from 'react'
import classes from './Banners.module.css'


import Image from '../image/Image'


const Banners = ({banners}) => {

    const [current, setCurrent] = useState(1)
    const length = banners.length;

    console.log(banners)

    const nextSlide = () => {
        if(current !== length){
            setCurrent(current+1)
        } 
        else if (current === length){
            setCurrent(1)
        }
    }


    const prevSlide = () => {
        if(current !== 1){
            setCurrent(current - 1)
        }
        else if (current === 1){
            setCurrent(length)
        }
    }


    const moveDot = index => {
        setCurrent(index)
    }

    return (
        <div className={classes.carousel}>
            <div className={classes.carousel__container}>
                {
                    banners.map((data)=>(
                        <div
                        key={data.id}
                        className={
                            data.order === current ? `${classes.slide} ${classes.active}` : `${classes.slide}`
                        }
                        >

                            <Image source={data.bannerImageUrl} alt={data.bannerImageAlt} className={classes.image}/>
                            
                        </div>
                    ))
                }

            </div>


            <button onClick={nextSlide} className={`${classes.btn_slide_next}`}> Next</button>
            <button onClick={prevSlide} className={`${classes.btn_slide_prev}`}> Previous</button>
            
            <div className={classes.container_dots}>
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={current === index + 1 ? `${classes.dot} ${classes.active}` : `${classes.dot}`}
                    ></div>
                ))}
            </div>

        </div>
    )
}

export default Banners