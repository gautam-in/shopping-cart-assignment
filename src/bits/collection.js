import React from "react";
import { withRouter } from "react-router-dom";
import CollectionItems from "./coll-items";
import "./styles/collection.css";

const Collection = ({ title, items, history, match }) => {
  return (
    <div>
      <div className="c-content">
        <h2
          className="title"
          onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
        >
          {title}
        </h2>
        <CollectionItems items={items} />
      </div>
    </div>
  );
};

export default withRouter(Collection);
