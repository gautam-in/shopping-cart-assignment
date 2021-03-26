import React from 'react';
import logo from '../../../public/images/logo.png';
import cart from '../../../public/images/cart.png';
import './style.scss';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render()
         {
        return(
            <footer className="myFooter">
                <p className='footerText'>
                    Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
                </p>
            </footer>
        )
    }
}


export default Footer

