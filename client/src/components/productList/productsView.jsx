import React from 'react';
import Card from "./card";

const productsView = (props) => {
    return (
        <div className="mainContainer">
        {props.itemlist
          .filter((item) => (props.cat == null ? true : item.category === props.cat))
          .map((p,i) => {
            return <Card p={p} key={i} />;
          })}
      </div>
    )
}

export default productsView;