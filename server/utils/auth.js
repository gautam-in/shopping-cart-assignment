const jwt = require("jsonwebtoken");
const {errorName} = require("./errors");

const authenticated = (next) => async (root, args, context, info) => {
    if (!context.authToken) {
        throw new Error(errorName.UNAUTHORIZED);
    } else {
        const token = context.authToken.split(" ")[1]
        try {
            const userData = await jwtVerify(token)
            const authData = {
                isAuthenticated: true,
                userData
            }
            return next(root, args, context, info, authData)
        } catch (e) {
            throw new Error(errorName.JWT_EXPIRED);
        }
    }
};

const jwtSign = (userData) => {
    return jwt.sign(userData, process.env.JWT_ENCRYPT_KEY, {
        expiresIn: "1d"
    })
}

const jwtVerify = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_ENCRYPT_KEY, (err, decoded) => {
            if(err) {
                reject(err)
            } else {
                resolve(decoded)
            }
        });
    })
}

module.exports  = {
    authenticated,
    jwtSign,
    jwtVerify
}

