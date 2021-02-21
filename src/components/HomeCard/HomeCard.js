import React from "react";
import Aux from "../../hoc/Aux/Aux";
import Button from "../UI/Button/Button";
import Classes from "./HomeCard.css";

const HomeCard = ({ categories, categorySelectHandler }) => {
  return (
    <Aux>
      {categories &&
        categories.length > 0 &&
        categories.map((item, index) => {
          let path = `../..${item.imageUrl}`;
          let btn = `Explore ${item.key}`;
          return item.enabled && item.id !== "all" ? (
            <div
              key={item.id}
              className={
                item.order % 2 !== 0 ? Classes.Cardwrapper : Classes.ReverseFlow
              }
            >
              <div className={Classes.ImgWrapper}>
                <img
                  src={`${path}`}
                  alt={item.name}
                  className={Classes.HomeCardImg}
                />
              </div>
              <div className={Classes.HomeCardContent}>
                <h3 className={Classes.Header3}>{item.name}</h3>
                <p className={Classes.FontP}>{item.description}</p>
                <Button
                  clicked={() => categorySelectHandler(item.id, item.name)}
                >
                  {btn}
                </Button>
              </div>
            </div>
          ) : null;
        })}
    </Aux>
  );
};
export default HomeCard;
