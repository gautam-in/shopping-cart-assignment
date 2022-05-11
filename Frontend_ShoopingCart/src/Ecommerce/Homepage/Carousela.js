import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Carousela(props) {
  const { post } = props;

  return (
    <div className="card shadow  mb-1 bg-white rounded  ">
      <Carousel>
        {post.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.bannerImageUrl}
              alt={item.bannerImageAlt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
