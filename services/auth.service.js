const User = require("../models/user.model");

async function findOneUserByEmailOrPassword(email, username) {
    return await User.findOne({ $or: [{ email }, { username }] })
}

module.exports = { findOneUserByEmailOrPassword }