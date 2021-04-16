import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './Footer.scss';

const Footer = () => (
  <footer>
    <p>Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd</p>
  </footer>
);

export default withStyles(styles)(Footer);
