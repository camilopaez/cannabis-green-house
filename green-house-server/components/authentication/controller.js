const User = require("../../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Validator = require('validatorjs')

const login = async (req, res) => {


    try {

        let rules = {
            username: 'required|string|min:3',
            password: 'required|min:3'
        };
        let data = req.body
        let username = data.username
        let password = data.password
        let validation = (new Validator(data, rules)).passes();

        if (validation) {

            let user = await User.findOne({
                username
            });
            if (!user) {
                return res.status(400).json({
                    msg: "User does not exist"
                })
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({
                    msg: "Incorrect password"
                })
            }
            const payload = {
                user: {
                    id: user.id
                }
            };
            jwt.sign(
                payload,
                "mySecretToken", {
                    expiresIn: 1000
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );

        } else {
            res.status(500).send("Invalid username or password");
        }
    } catch (error) {
       
        res.status(500).send(error.message);
    }
}

exports.login = login