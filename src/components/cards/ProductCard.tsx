import React from "react";
import { Button, Card, Col, Row } from "antd";
import EllipsisText from "react-ellipsis-text";
export default function ProductCard(props) {
  const { data, addToCart } = props;
  return (
    <Card
      hoverable
      title={
        <span className="bold fontsize16 p5">
          <EllipsisText text={data.name} length={50} />
        </span>
      }
      className="product-card"
    >
      <Row className="flex flexible">
        <Col span={24} className="card-img w50">
          <img alt="example" src={data.imageURL} />
        </Col>
        <Col span={24} className="card-description medium p5 w50">
          <EllipsisText text={data.description} length={100} />
        </Col>
      </Row>
      <Col
        span={24}
        className="absolute flex justify-content-space-between w100 p10 align-items-center"
      >
        <div className="medium">MRP Rs.{data.price}</div>
        <div>
          <Button
            className="w100 white card-action-btn medium"
            type="text"
            onClick={() => addToCart(data)}
          >
            Buy Now
          </Button>
        </div>
      </Col>
    </Card>
  );
}
