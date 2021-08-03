import React from 'react'
import { useHistory } from 'react-router-dom';

export default function CategoryCard(props) {
    const history = useHistory();

    return (
        <div className="ProductCard"
            onClick={() => history.push(`/categories/${props.id}`)}
        >
            <img src={props.imageUrl}
                alt={props.id || 'Image'} />
            <div className="ProductCard__Content">
                <span className="ProductTitle">{props.name}</span>
            </div>
        </div>
    )
}
