const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
require('dotenv').config()
const app = express()

//app level middleware
app.use(helmet())
app.use(morgan('common'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//connecting database
const connectDB = require('./db')
connectDB()

//user defined routes
const channelRoute = require('./routes/conversation')
app.use('/api/v1', channelRoute)

//listener
const port = process.env.port || 8080
app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`server up on port ${port}`)
    }
})
