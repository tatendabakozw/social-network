const jwt = require('jsonwebtoken')

//checking if user id signed in route
exports.requireSignIn = (req,res,next)=>{

    if(req.headers.authorization){
        const token = req.headers.authorization
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
    }else{
        return res.status(500).json({message: 'Authorisation Required!'})
    }
    next()
}