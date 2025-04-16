const User = require("../models/user.model")
const bcrypt = require('bcrypt')
const { findOneUserByEmailOrPassword } = require("../services/auth.service")

exports.registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const userExists = await findOneUserByEmailOrPassword(email, username)
        console.log("here 1 ", userExists)
        if (userExists) {
            return res.status(500).json({
                error: true,
                message: "Account already exists"
            })
        }

        //hash password 

        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        const data = new User()
        data.UserName = username
        data.email = email
        data.password = hashedPassword
        const savedData = await data.save()
        console.log('data is : ', data)
        res.status(201).json({
            error: false,
            data: savedData
        })
    } catch (error) {
        console.log('error here is ', error)

    }
}