const User = require("../models/user.model");

async function findUserByEmailOrPassword(email, UserName) {
    console.log('checking for username', UserName)
    console.log('checking for email', email)

    return await User.findOne({ $or: [{ email }, { UserName }] })
}

async function createUser({ username, email, hashedPassword }) {
    const data = new User()
    data.UserName = username
    data.email = email
    data.password = hashedPassword
    return await data.save()
}

module.exports = { findUserByEmailOrPassword, createUser }