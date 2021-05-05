let express = require('express');
let router = express.Router();
let totalCounter = require('./data/constant');
let commonContent = require('./data/strings');

/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register',
  {
    totalCounter:totalCounter.total_item_count, 
    footerContent: commonContent.footer.Copyright,
    registerHeading: commonContent.register.Register_Heading, 
    registerDesc: commonContent.register.Register_Desc,
    registerBtn : commonContent.register.Register_Button,
    Email : commonContent.form.Email,
    Password : commonContent.form.Password,
    firstName : commonContent.form.First_Name,
    lastName : commonContent.form.Last_Name,
    confPassword : commonContent.form.Conf_Password,
    menuHome : commonContent.header.Home_Menu,
    menuProduct : commonContent.header.Product_Menu,
    menuLogin : commonContent.header.Login_Menu,
    menuRegister : commonContent.header.Register_Menu,
    cartItem : commonContent.header.Cart_Item
  });
});

module.exports = router;
