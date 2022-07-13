const ErrorResponse = require("../utils/errorResponse");
const Product = require("../models/Product");

/**
 *
 * @desc Get Products
 * @route POST /api/v1/products
 * @access private
 */
exports.getProducts = async (req,res,next) => {
    try{
        const products = await Product.find().populate('category');
        res.status(200).send({success: true, data : products});

    }
    catch(err){
        return next(new ErrorResponse(err, 400));

    }
}

