const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
/**
 *
 * @desc Register User
 * @route POST /api/v1/auth/register
 * @access public
 */
exports.register = async (req,res,next) => {
    try{
        const { first_name,last_name, email, password} = req.body;
        const user = await User.create({
            first_name,
            last_name,
            email,
            password
        });
        const token = user.getSignedJwtToken();
        res.status(200).send({success: true, token: token});

    }
    catch(err){
        return next(new ErrorResponse(err, 400));

    }
}

/**
 *
 * @desc Login User
 * @route POST /api/v1/auth/login
 * @access public
 */
exports.loginUser = async (req,res,next) => {
    try{
        const { email, password} = req.body;
        if(!email || !password){
            return next(new ErrorResponse('Please prove an email and password', 400));
        }
        const user = await User.findOne({email}).select('+password');
        if(!user) {
            return next(new ErrorResponse('Invalid Credentials', 401));
        }
        const isMatched = await user.matchPassword(password);
        if(!isMatched){
            return next(new ErrorResponse('Invalid Credentials', 401));
        }
        const token = user.getSignedJwtToken();
        res.status(200).send({success: true, userDetails:{'first_name': user.first_name, 'last_name' : user.last_name, 'email': user.email }, token: token});

    }
    catch(err){
        return next(new ErrorResponse(err, 400));

    }
}
