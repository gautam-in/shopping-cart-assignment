import React from 'react';
import { _FOOTER_TEXT } from '../../../utils/constants';

import './footer.scss';
const Footer = () => {
    return <footer className='container'>
        <p>{_FOOTER_TEXT}</p>
    </footer>
}

export default Footer;