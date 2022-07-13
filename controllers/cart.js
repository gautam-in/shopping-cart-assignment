const ErrorResponse = require("../utils/errorResponse");
const Cart = require("../models/Cart");
const User = require("../models/User");
const Product = require("../models/Product");
/**
 *
 * @desc Add to Cart
 * @route POST /api/v1/cart/addToCart
 * @access private
 */
exports.addToCart = async (req,res,next) => {
    try{
       const {productId, quantity} = req.body;
       const product = await Product.findById(productId);
       if(!product){
           return next(new ErrorResponse('Item with Id does not exist', 400));
       }
       const userId = req.user._id;
       const existingCart = await Cart.findOne({user : userId});
       if(existingCart){
           const existingProductIndex = existingCart.products.findIndex(p => String(p.product) === productId);
           if(existingProductIndex >= 0){
               console.log("existingProductIndex---->", existingProductIndex, existingCart.products[existingProductIndex]);
               existingCart.products[existingProductIndex]['quantity'] += quantity;
               console.log("existingCart--->", existingCart);
           }
           else{
               existingCart.products.push({product: productId, quantity: quantity})
           }
           existingCart.totalAmount += product.price * quantity
           const cart = await existingCart.save();
           res.status(200).send({success: true, cart: cart});

       }else{
           const cart = await Cart.create({
              user: userId,
               products: [{
                  product: product._id,
                  quantity: quantity
               }],
               totalAmount : product.price * quantity
           });
           res.status(200).send({success: true, cart: cart});
       }

    }
    catch(err){
        return next(new ErrorResponse(err, 400));

    }
}

