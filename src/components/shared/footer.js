import React from 'react';
import './footer.scss';

const Footer = () => {
  return ( 
    <footer className={'footer mt-5 p-3'}>
            Copyright &copy; 2011-{new Date().getFullYear()}  Sabhka Bazar Supplies Pvt Ltd 
    </footer>
  );
};
 
export default Footer;