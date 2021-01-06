const bcrypt = require('bcryptjs')
const db = require('../db')
const jwt = require('jsonwebtoken')

//register user
//post request
//get username, password and email from request body
//do some validation
//encrypt password
//send info to database
exports.registerUser = async (req, res) => {
    let { username, password, email } = req.body
    try {
        //all fields should be entered
        if (!username || !email || !password) {
            res.status(403).json({ error: 'Enter All Fields' })
        }
        //chack if password id greater than6
        if (password.length < 6) {
            res.status(403).json({ error: 'Password too Short' })
        } else {
            let hashPassword = await bcrypt.hash(password, 10)
            const results = await db.query('SELECT * FROM users WHERE email = $1', [email])
            if (results.rows.length > 0) {
                res.status(403).json({ error: 'Account Already Exists' })
            } else {
                const newUser = db.query('INSERT INTO users (password, email, username) VALUES($1, $2, $3)', [hashPassword, email, username]);
                res.status(200).json({ message: 'Account Created!', user: newUser })
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

//login a user
//check if email exists
//check if entered password matches the hashed password
//create jwt token and assign a payload
exports.loginUser = async (req, res) => {
    const { email, password } = req.body
    //check if all fields have been entered
    try {
        if (!email || !password) {
            res.status(403).json({ error: 'Enter All Fields' })
        }

        //check if user exists in database
        const _user = await db.query('SELECT * FROM users WHERE email = $1', [email])
        if (_user.rows.length <= 0) {
            res.status(403).json({ error: 'User Does Not Exist' })
        } else {
            const hashPassword = _user.rows[0].password

            //checking if password matches the hashed password in databse
            if (bcrypt.compareSync(password, hashPassword)) {
                // setting access token
                const accessToken = await jwt.sign({ username: _user.rows[0].username, email: _user.rows[0].email }, process.env.JWT_SECRET);
                res.json({
                    accessToken
                });
            }
            //if password do not match thenwrong credentials 
            else {
                return res.status(400).json({
                    message: 'Invalid Credentials'
                })
            }
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}    