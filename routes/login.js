let express = require('express');
let router = express.Router();
let totalCounter = require('./data/constant');
let commonContent = require('./data/strings');
/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login',
    {
        totalCounter:totalCounter.total_item_count, 
        footerContent: commonContent.footer.Copyright,
        loginHeading: commonContent.login.Login_Heading, 
        loginDesc: commonContent.login.Login_Desc,
        loginBtn : commonContent.login.Login_Button,
        Email : commonContent.form.Email,
        Password : commonContent.form.Password,
        menuHome : commonContent.header.Home_Menu,
        menuProduct : commonContent.header.Product_Menu,
        menuLogin : commonContent.header.Login_Menu,
        menuRegister : commonContent.header.Register_Menu,
        cartItem : commonContent.header.Cart_Item
    });
});

module.exports = router;
