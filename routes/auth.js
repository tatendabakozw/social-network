const express = require('express')
const { registerUser, loginUser } = require('../controllers/auth')
const router = express.Router()


//register user route
//post request
router.post('/register', registerUser)

//login user
//post request
router.post('/login', loginUser)

//exporting the router
module.exports = router