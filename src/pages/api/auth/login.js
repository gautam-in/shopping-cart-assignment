import { Users } from "./../../../data/users";
export default function handler(req, res) {
    console.log("Login Handler : ", req.body, req.method);

    try {
        if (req.method !== 'POST') {
            res.status(405).send({ message: 'Only POST requests allowed' })
            return
        }
        const body = JSON.parse(req.body);
        const user = Users.find((user) => {
           return  user.email == body.email && user.password === parseInt('1234')
        });

        if (!user) {
            res.status(404).send({ message: 'User does not exit!' })
            return
        }
        console.log("User Verified SuccessFully !");
        res.status(200).json(user);
    } catch (error) {
        res.status(405).send({ message: `{error.message}` })
        return
    }
};