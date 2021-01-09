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
    let { username, password, email, confirmPassword } = req.body
    try {
        //checking if fields are the same
        if(confirmPassword !== password){
            res.status(403).json({ error: 'Passwords do not match' })
        }
        //all fields should be entered
        else if (!username || !email || !password || !confirmPassword) {
            res.status(403).json({ error: 'Enter All Fields' })
        }

        //chack if password id greater than6
        else if (password.length < 6) {
            res.status(403).json({ error: 'Password too Short' })
        } else {
            let hashPassword = await bcrypt.hash(password, 10)
            const results = await db.query('SELECT * FROM users WHERE email = $1', [email])
            if (results.rows.length > 0) {
                res.status(403).json({ error: 'Account Already Exists' })
            } else {
                const newUser = db.query('INSERT INTO users (password, email, username, status) VALUES($1, $2, $3, $4)', [hashPassword, email, username,'offline']);
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
                await db.query("UPDATE users SET status = ($1) WHERE email = $2",['online',email])
                res.status(200).json({
                    accessToken,
                    user: {
                        user_id: _user.rows[0].user_id,
                        username:  _user.rows[0].username,
                        email: _user.rows[0].email,
                        firstname:  _user.rows[0].firstname,
                        lastname: _user.rows[0].lastname,
                        status: _user.rows[0].status,
                        phonenumber: _user.rows[0].phonenumber,
                        bio: _user.rows[0].bio,
                    }
                })
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

//logout route 
exports.logoutUser =async (req,res)=>{
    try {
        const {email} = req.body
        const _user = await db.query('SELECT * FROM users WHERE email = $1', [email])
        await db.query("UPDATE users SET status = ($1) WHERE email = $2",['offline',email])
        await res.json({userStatus:_user.rows[0].status})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}