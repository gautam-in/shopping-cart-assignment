const ErrorResponse = require("../utils/errorResponse");
const Banner = require("../models/Banner");

/**
 *
 * @desc Get Banners
 * @route POST /api/v1/banners
 * @access private
 */
exports.getBanners = async (req,res,next) => {
    try{
        const banners = await Banner.find();
        res.status(200).send({success: true, data : banners});

    }
    catch(err){
        return next(new ErrorResponse(err, 400));

    }
}

