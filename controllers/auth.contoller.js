const User = require("../models/user.model")
const { findUserByEmailOrPassword, createUser } = require("../services/auth.service")
const hashPassword = require("../utils/hashPassword")

exports.registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const userExists = await findUserByEmailOrPassword(email, username)
        console.log("here 1 ", userExists)
        if (userExists) {
            return res.status(500).json({
                error: true,
                message: "Account already exists"
            })
        }

        //hash password 
        const hashedPassword = await hashPassword(password)
        const savedData = await createUser({ username, email, hashedPassword })
        res.status(201).json({
            error: false,
            data: savedData
        })
    } catch (error) {
        console.log('error here is ', error)

    }
}