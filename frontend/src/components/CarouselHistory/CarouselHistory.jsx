import React from 'react';

const CarouselHistory = ({ current, items, ...props }) => {

    let displayItems = items.map((el, index) => {
        let name = (index === current) ? 'active' : '';
        return (
            <li key={index}>
                <button
                    aria-label={name}
                    className={name}
                    onClick={() => props.changeSilde(current, index)}
                ></button>
            </li>
        )
    });

    return (
        <ul>{displayItems}</ul>
    )

}

export default CarouselHistory;