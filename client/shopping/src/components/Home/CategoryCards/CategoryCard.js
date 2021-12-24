import React from 'react';
import "./CategoryCard.css"
import useImageLoad from '../../../Hooks/useImageLoad';
function CategoryCard(props) {
    const [errorCat, item]= useImageLoad(props.imageUrl);
    return (
        <section className="row center" style={{order:props.order, marginBottom:"1em"}} data-testid="section">
           { !errorCat && <div className="card" >
            <div className="row center">
            <div className="col-6 g-sm-0" style={props.order%2?{order:1}:{order:2}}>
                <img className="cat-image" src={item} alt={props.name}></img>
            </div>
            <div className="col-6 g-sm-0" style={props.order%2?{order:2}:{order:1}}>
                <h4 className="row center heading" >
                    {props.name}
                </h4> 
                <div className="row center middle" data-testid="desc">
                    {props.description}
                </div> 
                <div className="row center">
                   <button className="explore"> {"Explore "+ props.name} </button>
                </div>
                </div>
                </div>
            </div>}
        </section>
    );
}

export default CategoryCard;