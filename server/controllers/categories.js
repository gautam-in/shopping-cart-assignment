const ErrorResponse = require("../utils/errorResponse");
const Category = require("../models/Category");

/**
 *
 * @desc Get Categories
 * @route POST /api/v1/categories
 * @access private
 */
exports.getCategories = async (req,res,next) => {
    try{
        const categories = await Category.find({order :{$gte : 0}});
        res.status(200).send({success: true, data : categories});

    }
    catch(err){
        return next(new ErrorResponse(err, 400));

    }
}

