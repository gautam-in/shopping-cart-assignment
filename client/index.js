import logMessage from './scripts/logger.js'
import './scss/styles.scss'
// Log message to console
logMessage('Welcome to Expack!')

if(typeof(module.hot) !== 'undefined') {
    module.hot.accept() // eslint-disable-line no-undef  
  }