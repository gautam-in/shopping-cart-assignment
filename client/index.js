import logMessage from './scripts/logger.js';
import './scss/styles.scss';
import './scss/header.scss';
import './scss/banner.scss';
import './scss/category.scss';
import './scss/productList.scss';
// Log message to console
logMessage('Welcome to Expack!')

if(typeof(module.hot) !== 'undefined') {
    module.hot.accept() // eslint-disable-line no-undef  
  }