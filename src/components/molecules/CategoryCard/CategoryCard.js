import React from 'react';
import './CategoryCard.scss';
import { useHistory } from 'react-router-dom';
const CategoryCard = (props) => {
    const history = useHistory();
    const handleClicks = (value) => {
        console.log(value);
        const state = { id: value };
        history.push({
            pathname: '/products',
            state
        });

    };

    return (<>
        <div className="category-card">
            <div className="card-image">
                <img src={props.imgUrl} alt={props.categoryName} />
            </div>
            <div className="card-content">
                <h3>{props.categoryName}</h3>
                <br></br>
                <p>{props.desc}</p>
                <button className="btn-primary" onClick={() => handleClicks(props.id)}>Explore {props.name}</button>
            </div>
        </div>
    </>)
}

export default CategoryCard;