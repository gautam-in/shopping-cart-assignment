import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from '../Logo/Logo'
import HeroButton from '../HeroButton/HeroButton';
import useMediaQuery from '../../Hooks/useMediaQuery';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { countTotalItems } from '../../Helpers/cartPrice';
import { toggleCart } from '../../Redux/actions/cart';

const HeaderWrapper = styled.header`
    width: 100%;
    box-shadow: 0px 0px 10px 0px #9e9e9e;
    height: 80px;
    & a {
        text-decoration: none;
        color: #505050;
        font-weight: bold;
    }
`;

export default function Header() {

    const isMobile = useMediaQuery("(max-width: 480px)");
    const isTab = useMediaQuery("(min-width:481px) and (max-width: 768px)");
    const history = useHistory();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleClick = () => {
        (isMobile || isTab) ? history.push('/cart') : dispatch(toggleCart(true));
    }

    const totalItems = countTotalItems(cartItems);
    return (
        <HeaderWrapper>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3 mt-2'>
                        <Link to='/'>
                            <Logo />
                        </Link>

                    </div>
                    {!isMobile &&
                        <div className='col-6 mt-4'>
                            <nav>
                                <div className='row'>
                                    <div className='col-2'>
                                        <Link to='/'>
                                            Home
                                        </Link>
                                    </div>
                                    <div className='col-2'>
                                        <Link to='/products'>
                                            Products
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    }
                    <div className={isMobile ? 'col-9' : 'col-3'}>
                        {!isMobile &&
                            <nav>
                                <div className='row'>
                                    <div className='col-3'>
                                        <Link to='/signin'>
                                            SignIn
                                        </Link>
                                    </div>
                                    <div className='col-2'>
                                        <Link to='/register'>
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        }
                        <HeroButton imgUrl='static/images/cart.svg' items={`${totalItems} items`} handleClick={handleClick} />
                    </div>
                </div>
            </div>

        </HeaderWrapper>
    )
}
