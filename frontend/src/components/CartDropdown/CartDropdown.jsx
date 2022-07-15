import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import CardDropDownCommon from '../CardDropDownCommon/CardDropDownCommon';

import './CartDropdown.scss';

const CartDropdown = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1026);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1026);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const { hidden } = useSelector(createStructuredSelector({
        hidden: selectCartHidden,
    }))

    return (
        <>
            {isDesktop ?
                <div className={'cart-root' + ((hidden) ? '' : " active")}>
                    <CardDropDownCommon isDesktop={isDesktop} />
                </div>
                : <CardDropDownCommon isDesktop={isDesktop} />
            }

        </>
    )
};

export default CartDropdown;
