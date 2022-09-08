const Cart = require("../model/cart");
const ObjectId = require('mongodb').ObjectId; 
const logger = require('../logger/index');

//add product in user cart
const addToCart = async (req, res) => {
  logger.debug(`cartCrtl: addToCart() initiate`);
  try {
    const { userId, product } = req.body;
    logger.debug(`cartCrtl: userid is: ${userId}`);
    logger.debug(`cartCrtl: product is: ${product}`);
    const isCartExist = await Cart.findOne({ userId: userId });
    //checking if user has already cart exit
    if (!isCartExist) {
      logger.debug(`cartCtrl: Cart exist now for userId: ${userId}`);
      const cart = new Cart({
        userId: userId,
        products: product,
      });
      logger.debug(`cartCtrl: saving cart data for userId: ${userId}`);
      cart.save();
      logger.debug(`cartCtrl: saving cart saved for userId: ${userId}`)
      return res.status(200).json({ message: "record added successfully" });
    }
    
    //filter product on existing cart
    const isProductExist = await isCartExist.products.find(
      (prod) => prod.productId === product.productId
    );

    //checking if product found or not
    if (isProductExist) {
      logger.debug(`cartCtrl: product exist so updating records for userId: ${userId}`);
      await Cart.updateOne(
        {
          _id: isCartExist._id,
          "products.productId": isProductExist.productId,
        },
        { $set: { "products.$.quantity": isProductExist.quantity + 1 } }
      );
      logger.debug(`cartCtrl: record updates successfully`);
      return res.status(200).json({ message: "record update successfully" });
    } else {
      logger.debug(`cartCtrl: product not exist in userId: ${userId} so update record now`);
      await Cart.updateOne(
        { _id: isCartExist._id },
        { $push: { products: product } }
      );
      logger.debug(`cartCtrl: record updates successfully`);
      return res.status(200).json({ message: "record update successfully" });
    }
  } catch (error) {
    logger.error(`cartCtrl: Internal server error: ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

//get cartlist to user
const getCart = async(req, res) => {
  logger.debug(`cartCrtl: getCart() initiate`);
  try {
    const { userId } = req.query;
    logger.debug(`cartCrtl: userid is: ${userId}`);
    const cartData = await Cart.findOne({userId:new ObjectId(userId)});
    if(cartData){
      logger.debug(`cartCrtl: cartdata exist so providing to user`);
      return res.status(200).json(cartData);
    }else{
      logger.debug(`cartCrtl: no cart data available`);
      return res.status(403).json({message:'No data available'});
    }  
  } catch (error) {
    logger.error(`cartCtrl: Internal server error: ${error.message}`);
    return res.status(500).json({error:error.message});
  }
};

//remove cart from database
const removeCart = async(req,res)=>{
  logger.debug(`cartCrtl: removeCart() initiate`);
  try {
    const { userId,productId } = req.body;
    const isCartExist = await Cart.findOne({userId:new ObjectId(userId)});
    if(isCartExist){
      logger.debug(`cartCrtl: cartdata exist with user id: ${userId}`);
      const isProductExist = await isCartExist.products.find(
        (prod) => prod.productId === productId
      );
      console.log(isProductExist)
      if(isProductExist.quantity == 1){
        await Cart.updateOne(
          {
            _id: isCartExist._id
          },
          { $pull: { "products": isProductExist } }
        );
        return res.status(200).json('Cart Updated');
      }

      await Cart.updateOne(
        {
          _id: isCartExist._id,
          "products.productId": isProductExist.productId,
        },
        { $set: { "products.$.quantity": isProductExist.quantity - 1 } }
      );
      return res.status(200).json("Cart updated");
    }else{
      logger.debug(`cartCrtl: no cart data available`);
      return res.status(403).json({message:'No data available'});
    }
  } catch (error) {
    logger.error(`cartCtrl: Internal server error: ${error.message}`);
    return res.status(500).json({error:error.message});
  }
}

module.exports = {
  addToCart,
  getCart,
  removeCart
};
