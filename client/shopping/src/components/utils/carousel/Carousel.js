import React, { useRef, useState } from 'react';
import "./Carousel.css"

function Carousel({image}) {
    const scroll = useRef(null);
    const [scrollState, setScroll]= useState(0)
    let prev = () =>{
        scroll.current.scrollBy({left: -scroll.current.clientWidth, top: 0, behavior: 'smooth'});
       if(scrollState>0) 
       {
           let index = scrollState -1;
           setScroll(index)
       }
    }
    let next = ()=>{
        scroll.current.scrollBy({left: scroll.current.clientWidth, top: 0, behavior: 'smooth'});
        if(scrollState<image.length-1) 
          { 
              let index = scrollState + 1;
              setScroll(index)
            }
    }
    let currentSlide = (index)=>{
            scroll.current.scrollBy({left: -(scrollState-index)*scroll.current.clientWidth, top: 0, behavior: 'smooth'});
            setScroll(index)
    }
    return (
        <div className="carousel one-edge-shadow">
            <div className="scroller" ref={scroll}>
            {image && image.map((img)=><div className="item"><img src={img} alt="banner"/></div>) }
            </div>
            <button  className="prev" onClick={prev}>prev</button>
            <button className="next" onClick={next}>next</button>
            <div className="dotContainer">
                {image && image.map(( img, index)=><span className={scrollState===index?"active":undefined} onClick={()=>currentSlide(index)}></span>) }
            </div>
        </div>
    );
}

export default Carousel;