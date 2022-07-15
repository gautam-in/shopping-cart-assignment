import React from 'react'
import Button from '../Button/Button';
import './CategoryCard.scss'
import { useDispatch } from 'react-redux'
import { setCategory } from '../../redux/cart/cart.actions';
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ _id, name = "", catKey, description = "", imageUrl = "", enabled, reverse = false, ...props }) => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const onExploreClick = () => {
        if (!enabled) return false;
        dispatch(setCategory(_id))
        navigate("/products", { replace: true });
    }

    return (
        <div className="sp-card-1">
            <div className={'card-container ' + (reverse ? 'row-reverse' : "")}>
                <div>
                    <div className="card-title">{name}</div>
                    <div className="sub-line">{description}</div>
                    <Button text={`Explore ${catKey}`} title={`Explore ${name}`} onClick={onExploreClick} />
                </div>
                <div>
                    <img src={"assets/" + imageUrl} alt={name} aria-label={name} loading="lazy" />
                </div>
            </div>

        </div>
    )
}

export default CategoryCard;