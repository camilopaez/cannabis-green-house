const User = require("../../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Validator = require('validatorjs')

const register = async (req, res) => {


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
            if (user) {
                return res.status(400).json({
                    msg: "User already exists"
                })
            }
            user = new User({
                username,
                password
            })
            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt)

            await user.save()

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload,
                "mySecretToken", {
                    expiresIn: 10000
                },
                (err, token) => {
                    if (err) throw err
                    res.status(200).json({
                        token
                    })
                }
            )
        }
        else{
            res.status(500).send("Invalid username or password");
        }

    } catch (error) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }


}

exports.register = register