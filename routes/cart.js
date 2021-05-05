let express = require('express');
let router = express.Router();
let prodListing = require('../public/data/products/index.get.json');
let totalCounter = require('./data/constant');
let commonContent = require('./data/strings');
let prodSelected = [];
let checkoutAmount = 0;


/* GET cart page. */
router.get('/', function (req, res, next) {
    res.render('cart',
    {
        productselect: prodSelected, 
        checkoutAmount: checkoutAmount, 
        totalCounter:totalCounter.total_item_count, 
        footerContent: commonContent.footer.Copyright,
        menuHome : commonContent.header.Home_Menu,
        menuProduct : commonContent.header.Product_Menu,
        menuLogin : commonContent.header.Login_Menu,
        menuRegister : commonContent.header.Register_Menu,
        cartItem : commonContent.header.Cart_Item,
        priceGuarantee : commonContent.cart.Price_Guarantee,
        cartTitle : commonContent.cart.Cart_Title,
        cartPromocode : commonContent.cart.Cart_Promocode,
        checkoutBtn : commonContent.cart.Checkout_Btn,
        emptyCart: commonContent.cart.Cart_Empty
    });
});

/* Add to cart on button cliick */
router.get('/addtocart/:id', function (req, res, next) { 
    let count_flag = 0;
    prodListing.forEach(element => {
        if (element.id === req.params.id) {
            if (element.count == undefined) {
                element.count = 1;
                element.totalprice = element.price * element.count;
                checkoutAmount = checkoutAmount + element.price;
                prodSelected.push(element);
            } else {
                element.count = element.count + 1;
                element.totalprice = element.price * element.count;
                checkoutAmount = checkoutAmount + element.price;
            }
        }        
    });
    prodSelected.forEach(element => {
        count_flag = count_flag + element['count'];
        totalCounter.total_item_count = count_flag;
    });
    res.end(JSON.stringify({ id: req.params.id, element: prodSelected, checkoutAmount: checkoutAmount, totalCounter:totalCounter.total_item_count}));
});

/* Change cart count */
router.get('/changecartcount/:id/:task', function (req, res, next) {
    totalCounter.total_item_count = 0;
    if(req.params.task == "plus"){
        prodSelected.forEach(element => {
            if (element.id === req.params.id) {
                element.count = element.count + 1;
                element.totalprice = element.price * element.count;
                checkoutAmount = checkoutAmount + element.price;
            }
            totalCounter.total_item_count = totalCounter.total_item_count + element.count;
        });

        res.end(JSON.stringify({ id: req.params.id, element: prodSelected, checkoutAmount: checkoutAmount, totalCounter:totalCounter.total_item_count}));
    }
    else if(req.params.task == "minus"){
        console.log(prodSelected, "Before");
        prodSelected.forEach(element => {
            if (element.id === req.params.id) {
                element.count = element.count - 1;
                element.totalprice = element.price * element.count;
                checkoutAmount = checkoutAmount - element.price;   
            }
            totalCounter.total_item_count = totalCounter.total_item_count + element.count;   
        });
        res.end(JSON.stringify({ id: req.params.id, element: prodSelected, checkoutAmount: checkoutAmount, totalCounter:totalCounter.total_item_count}));
    }
});
module.exports = router;