import React from "react";
import { useSelector } from "react-redux";
import "./Card.css";

function Card({ cardObj, i }) {
    const { imageUrl, name, description, key } = cardObj;
    const windowSize=useSelector(state=>state.user.windowSize);
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
            <button className="bg-primary text-white px-4 py-2">{`Explore ${key}`}</button>
          </div>
        </>
      ) : (
        <>
          <div className="text-center">
            <div className="font-semibold text-xl">{name}</div>
            <p className="font-12 my-2">{description}</p>
            <button className="bg-primary text-white px-4 py-2">{`Explore ${key}`}</button>
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
