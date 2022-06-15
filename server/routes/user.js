var express = require('express');
var router = express.Router();

const usersData = [
    {
        firstName: "U1",
        lastName: "S1",
        email: "u1@test.com",
        password: "u1",
        id: 1,
    },
];
/* GET User data */
router.post('/login', function (req, res, next) {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const validUser = usersData.filter(user => user.email === email && user.password === password);
        if (validUser.length > 0) {
            const { email, id, name } = validUser[0];
            const token = "uslsfjlsdfjsjdfkljsdf4234234sdafafdasdf";
            res.json({ userData: { email, id, name }, token });
        } else {
            res.json({ message: "Invalid Credential..." });
        }
    } catch (error) {
        res.json({ message: "Invalid Credential..." });
    }

});

//Add user information
router.post('/register', function (req, res, next) {
    const newUser = req.body;
    try {
        const validateUser = usersData.filter(user => user.email === newUser.email);
        if (validateUser.length > 0) {
            res.json({ message: `Email ${newUser.email} already exit. Please try with some other email.` });
        } else {
            newUser.id = usersData.length + 1
            usersData.push(newUser)
            // delete newUser.password;
            res.json({ userData: newUser})
        }
    } catch (error) {
        res.json({ message: "some things went wrong...", error });
    }
});

module.exports = router;