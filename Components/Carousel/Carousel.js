import Image from "next/image";
import React, { useState } from "react";
import styles from "./Carousel.module.scss";


export default function Carousel(props) {
  
  const [current, setCurrent] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carousallength=props.caraousalData && props.caraousalData.length?props.caraousalData.length:0;
  const handleSlide = (slideOrder) => {
    setCurrent(slideOrder);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(0);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchEnd && touchStart - touchEnd > 15 && current!==carousallength) {
      handleSlide(current + 1);
    }

    if (touchEnd && touchStart - touchEnd < -15 && current!==1) {
      handleSlide(current - 1);
    }
  };

  return (
    <section className={styles["carousel"]}>
    <div className={styles["carousel__container"]} >

    {props.caraousalData &&props.caraousalData.map((item)=>{
      return (
          <div className={`${styles["carousel__container__slide"]} ${current===item.order?styles["active"]:""}`}  
          key={item.id} style={current===item.order?{display:"block"}:{display:"none"}}
          onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
              
          <Image src={item.bannerImageUrl} className={`${styles["carousel__container__slide__image"]} `} fill 
          priority={current===item.order?true:false}
          alt={item.bannerImageAlt}
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 60vw,
                100vw"
          
         />
          
        </div>
      )
    })}
      <button className={styles["carousel__left-button"]} onClick={()=>{handleSlide(current-1)}} disabled={current===1?true:false} aria-label={"Move to Preivius Image"} aria-disabled={current===1?"true":"false"}>PREV</button>
      <button className={styles["carousel__right-button"]} onClick={()=>{handleSlide(current+1)}} disabled={current===carousallength?true:false} aria-label={"Move to Next Image"} aria-disabled={current===carousallength?"true":"false"}>NEXT</button> 

        

  
  
    </div>

    <div className={styles["carousel__nav"]}>
        {props.caraousalData && props.caraousalData.map((data) => (
          <button
            key={data.id}
            
            onClick={() => handleSlide(data.order)}
            aria-label={data.bannerImageAlt}
            className={styles["carousel__nav__dot-button"]}
          ><div className={
            data.order === current
              ? `${styles["carousel__nav__dots"]} ${styles["dots-active"]}`
              : `${styles["carousel__nav__dots"]}`
          }></div></button>
        ))}
      </div>

    


   
    
</section>

  
  )}
