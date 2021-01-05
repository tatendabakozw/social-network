const morgan = require('morgan')
const express = require('express')
const app = express()
require('dotenv').config()
const pool = require('./db')

//connecting database
pool.connect((error)=>{
    if(error){
        console.log(error.message)
    }else{
       console.log("database connectsed successfully") 
    }
})
//app level middleware
app.use(morgan('common'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//user defined routes
const userRoute = require('./routes/user')
app.use('/api/v1',userRoute )

//listener
const port = process.env.port || 5500

app.listen(port,(error)=>{
    if(error){
        console.log(error.message)
    }else{
        console.log(`Server up on port ${port}`)
    }
})