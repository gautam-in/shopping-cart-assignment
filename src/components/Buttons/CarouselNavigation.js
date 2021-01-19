import React from "react";
import './CarouselNavigation.scss';

export default function CarouselNavigation(props) {
  return (
    <aside className="carousel-navigation">
      <ol className="carousel-navigation-list">
        {props.items.map((item, idx) => {
          return (
            <li className="carousel-navigation-item" key={item.order}>
              <span
                className={`carousel-navigation-button ${idx===props.active ? 'carousel-navigation-button-active' : ''}`}
                onClick={() => props.selectSlide(item.order-1)}
              >
                {`Go to slide ${item.order}`}
              </span>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
