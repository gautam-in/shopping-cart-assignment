import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

export default function Header() {
  return <div className='Header-container'>
    <div className='Header-item'>
    </div>
    <div className='Header-item'>
        <Link className='Header-item' to='/signin'>Sign In</Link>
        <Link className='Header-item' to='/register'>Register</Link>
    </div>      
  </div>;
}
