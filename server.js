const morgan = require('morgan')
const express = require('express')
const app = express()
require('dotenv').config()
const {connectDB} = require('./db')
const cors = require('cors')
app.use(cors({origin: 'http://localhost:3000'}))
const helmet = require('helmet')

//connecting database
connectDB()

//app level middleware
app.use(morgan('common'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(helmet())

//user defined routes
const authRoute = require('./routes/auth')
const serverRoute = require('./routes/servers')
app.use('/api/v1',authRoute)
app.use('/api/v1',serverRoute)


//listener
const port = process.env.port || 5500
app.listen(port,(error)=>{
    if(error){
        console.log(error.message)
    }else{
        console.log(`Server up on port ${port}`)
    }
})