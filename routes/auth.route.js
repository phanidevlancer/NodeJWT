const express = require('express')
const { registerController } = require('../controllers/auth.contoller')
const router = express.Router()


//Get collection of users
router.get('/users',(req,res) => {

})

//Signup Route
router.post('/register',registerController)

//login route
router.post('/login',(req,res) => {
    
})


module.exports = router