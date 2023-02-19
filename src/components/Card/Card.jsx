import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentCategory } from "../../redux/productSlice";
import "./Card.css";

function Card({ cardObj, i }) {
    const { imageUrl, name, description, key, id } = cardObj;
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const windowSize=useSelector(state=>state.user.windowSize);

    const handleCategorySelection=()=>{
      dispatch(setCurrentCategory(id));
      navigate('/products');
    }
  return (
    <div className="m-2 p-1 flex justify-around card-box-shadow items-center">
      {i % 2 == 0 ? (
        <>
          <div className="p-2">
                      <img src={imageUrl} alt={name} className={`${windowSize>400?'card-height':'h-16'}`} />
          </div>
          <div className="text-center">
            <div className="font-semibold text-xl">{name}</div>
            <p className="font-12 my-2">{description}</p>
            <button className="bg-primary text-white px-4 py-2 pointer" onClick={handleCategorySelection}>{`Explore ${key}`}</button>
          </div>
        </>
      ) : (
        <>
          <div className="text-center">
            <div className="font-semibold text-xl">{name}</div>
            <p className="font-12 my-2">{description}</p>
            <button className="bg-primary text-white px-4 py-2 pointer" onClick={handleCategorySelection}>{`Explore ${key}`}</button>
          </div>
          <div className="p-2">
            <img src={imageUrl} alt={name} className={`${windowSize>400?'card-height':'h-20'}`}  />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
