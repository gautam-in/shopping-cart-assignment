import React from 'react';
import logo from '../../../../static/images/logo.png';
import './Logo.scss';

export default function Logo() {
    return (
        <img src={logo} className="logo-image" alt="Logo Image" />
    )
}
