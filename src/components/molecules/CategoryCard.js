import React from 'react';

const CategoryCard=(props)=>{
    return (<>
    <div className="categoryCard">
       <div className="cardImage">
        <img src={props.imgUrl} alt={props.categoryName}/>
        </div>
        <div className="cardContent">
            <h3>{props.categoryName}</h3>
            <br></br>
            <p>{props.desc}</p>
            <br>
            </br>
            <button className="btn-primary">Explore fruit-and-veg</button>
        </div>
    </div>
    </>)
}

export default CategoryCard;