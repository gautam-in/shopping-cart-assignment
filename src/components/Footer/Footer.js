import React from 'react'
import './Footer.scss';
import * as Constants from '../../global-constants';

export default function Footer() {
    return (
        <footer className="footer">
            {Constants.Copyright}
        </footer>
    )
}
