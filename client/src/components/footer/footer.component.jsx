import React from 'react';
import { withRouter } from 'react-router-dom';
import './footer.styles.scss';

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        display: window.location.pathname !== '/checkout' ? 'block' : 'none',
      }}
    >
      <span>Copyright 2011-2018 Sabka Bazaar Groceries Supplies Pvt Ltd</span>
    </div>
  );
};

export default withRouter(Footer);
