import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer>
        <div className='container app-container'>
          <div className='row'>
            <div className='col-lg-9 offset-lg-3 col-md-8 offset-md-4'>
              <p className='d-flex justify-content-center justify-content-md-start mb-0'>Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Put Ltd</p>
            </div>
          </div>
        </div>
    </footer>
  )
}
