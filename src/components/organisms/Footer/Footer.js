import './Footer.scss';
import React from 'react';
import * as Constants from '../../../shared/constants';
const Footer = () => {
  return (
    <footer className='footer-wrap'>
      <p>{Constants.Copyright}</p>
    </footer>
  );
};

export default Footer;
