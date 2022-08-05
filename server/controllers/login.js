const { sign } = require("jsonwebtoken");

exports.login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        if (userName == 'kranthikiran@gmail.com' && password == 'Test@123') {
            const token = sign( req.body , process.env.JWT_SECRET, { expiresIn: 3600 });
            res.cookie('token', token, { httpOnly: false,maxAge: 900000,sameSite:true,domain:'http://localhost:3000'});
            console.log('Signed Cookies: ', req.cookies)
            res.status(200).json({token:token,message: "Login Successfull!" })
        }
        else {
            return res.status(403).json("Unauthorized")
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}