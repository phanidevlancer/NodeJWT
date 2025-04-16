const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    UserName: {
        type: String,
        required: [true, 'UserName must be provided'],
        unique: true,
        match: /^[a-zA-Z0-9_]+$/
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String
    },
    otp: {
        type: String,
        max: 6
    },
    emailVerified: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User