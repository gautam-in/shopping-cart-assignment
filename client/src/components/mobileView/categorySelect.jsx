import React from "react";
import './index.scss';

const categorySelect = (props) => {
    return (
        <div className="sidebarMobile">
        {props.categories
          .sort( (a, b) => {
            return a.order - b.order;
          })
          .map((p,i) => {
            return (
              <div
                style={{
                  backgroundColor: props.cat === p.id ? "lightgray" : "transparent",
                }}
                key ={i}
                onClick={() => {
                  props.selectCategory(p.id);
                  props.setMenu(false);
                }}
              >
                {p.name}
              </div>
            );
          })}
      </div>
    )
}

export default categorySelect;