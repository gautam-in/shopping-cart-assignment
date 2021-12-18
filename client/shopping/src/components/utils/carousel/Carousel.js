import React, { useEffect,  useState  } from 'react';

function Carousel({image}) {
    return (
        <div>
            {image && image.map((img)=>{
               return <img src={img} alt="banner"/>
            }) }
        </div>
    );
}

export default Carousel;