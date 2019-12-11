const express = require("express");
const session = require('express-session');
const router = express.Router();

const { check, validationResult } = require('express-validator/check');


router.post('/post', [
    check('fname').not().isEmpty().withMessage('Please enter First Name'),
    check('lname').not().isEmpty().withMessage('Please Enter Last Name'),
    check('email', 'Email is required')
    .not()
    .isEmpty()
    .isEmail(),
    check('psw', 'Password is requried')
    .isLength({ min: 5 }),
    check('psw-repeat', 'Password do not match').custom((value, { req }) => {
        if (value !== req.body.psw) {
            throw new Error('Password confirmation is incorrect');
        }
    })

], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.session.errors = errors;
        req.session.success = false;
        res.redirect('/register');
    } else {
        req.session.success = true;
        res.redirect('/');
    }
    console.log(errors.mapped());
});


module.exports = router;