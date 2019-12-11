const express = require("express");
const session = require('express-session');
const router = express.Router();

//const { check, validationResult } = require('express-validator/check');


router.post('/post', (req, res) => {
    res.redirect('/');


});


module.exports = router;