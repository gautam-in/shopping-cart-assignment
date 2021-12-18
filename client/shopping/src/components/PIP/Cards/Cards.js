import React from 'react';
import useImageLoad from '../../../Hooks/useImageLoad';
function Cards(props) {
    const [error, image]= useImageLoad(props.Url)
    console.log(error, image)
    return (
        <div className="col-sm-3" style={{width:"fit-content"}}>
            <div>{props.name}</div>
            {!error && <img src={image} alt="title"/>}
        </div>
    );
}

export default Cards;