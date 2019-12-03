// Import frameworks
const express = require('express');
const router = express.Router();

// Constants used for setting meta tags
const defaultProps = {
    title: 'Shopping Site',
    description: 'Shopping Site',
    keywords: 'Shopping Site',
    image: 'Shopping Site',
    siteName: 'Shopping Site',
    url: 'Shopping Site'
};

// Helper function to set default props
const renderProps = (props) => (
    Object.assign(defaultProps, props)
);

// Helper function to render a not found page
const renderNotFound = (res) => {
    res.status(404).render('not-found', {
        title: `${defaultProps.title} | Not Found`,
    });
};

/**
 * BEGIN ROUTING
 */

// Homepage
router.get('/', (req, res) => {
    res.render('home', renderProps({}));
});

router.get('/product', (req, res) => {
    res.render('product', renderProps({}));
});

// Handle 404 error
// NOTE this is reached if no other route above was matched
router.get('*', (req, res) => renderNotFound(res));

// Export the router
module.exports = router;