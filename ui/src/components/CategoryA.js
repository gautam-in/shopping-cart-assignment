import React from "react";
import { Card } from "react-bootstrap";
import "../styles/Category.scss";

export default function CategoryA(props) {
  // console.log(props);
  return (
    <div>
      <Card className="text-center">
        <Card.Body>
          <div className="card-element-container">
            <div>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                {props.description}
              </Card.Text>
              <button className="card-btn">{`Explore ${props.name}`}</button>
            </div>
            <div>
              <img
                src={props.imageUrl}
                alt=""
                height="auto"
                width="150px"
              />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
