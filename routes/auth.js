const express = require('express')
const { registerUser, loginUser, logoutUser } = require('../controllers/auth')
const db = require('../db')
const router = express.Router()


//register user route
//post request
router.post('/register', registerUser)

//login user
//post request
router.post('/login', loginUser)

//logout route
router.post('/logout',logoutUser)

//exporting the router
module.exports = router